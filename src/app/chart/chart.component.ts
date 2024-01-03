import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";
import { TaskForm, weekDaydata } from "../shared/task.model";
import { TaskServiceService } from "../task-list/task-service.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartsComponent implements OnInit{
  allListData:TaskForm[]=[];
  weekDayData:weekDaydata={
    mon:0,
    tue:0,
    wed:0,
    thu:0,
    fri:0,
    sat:0,
    sun:0
  }
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  constructor( public TS:TaskServiceService,) {
  }
  ngOnInit(): void {
    this.getData();
    this.generateChart()
  }
  
  generateChart(){
    this.chartOptions = {
      series: [
        {
          name: "Tasks",
          data: this.tempCount
        }
      ],
      chart: {
        height: 340,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return val + "";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
  
      xaxis: {
        categories: this.tempday,
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + "";
          }
        }
      },
      title: {
        text: `Number of tasks due in the next 7 days are : ${this.tempTotal}`,
        floating: 0,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  temp:any[]=[];
  tempCount:any[]=[];
  tempday:any[]=[];
  tempTotal=0;
  getData(){
    this.TS.dataChange.subscribe(res=>{
      this.allListData = res;
      // console.log(this.allListData);

      this.allListData.sort(function(a, b) {
        var c:any = new Date(a.dueDate);
        var d:any = new Date(b.dueDate);
        return c-d;
      });

      const now = new Date();
      this.allListData = this.allListData.filter(e => new Date(e.dueDate) > now)

      for(let i=0;i<this.allListData.length;i++){
        let  d = new Date(this.allListData[i].dueDate).toDateString();
        this.temp.push(d);
      }

      for(let p=0;p<this.temp.length;p++){
        let count=1;
        if(!this.tempday.includes(this.temp[p])){
          for(let q=p+1;q<this.temp.length;q++){
            if(this.temp[p].trim()==this.temp[q].trim()){
              count=count+1;
            }
          }
          this.tempCount.push(count);
          this.tempday.push(this.temp[p]);
        }
      }
      // console.log(this.tempCount);
      // console.log(this.tempday);
    });
    this.tempCount=this.tempCount.slice(0,7);
    this.tempday=this.tempday.slice(0,7);

    this.tempTotal=  this.tempCount.reduce((a, b) => a + b, 0)

  }


  
}
