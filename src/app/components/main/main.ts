import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, Ticks } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import categories from '../../data/categories.json'
import titles from '../../data/titles.json'
import resenas from '../../data/resenas.json'




@Component({
  selector: 'app-main',
  imports: [BaseChartDirective],
  templateUrl: './main.html',
})
export class Main {

  //Data categorias
  date_categories = categories;

  //Data titulos
  data_titles = titles;

  //Data resenas
  data_resenas = resenas;








  //Atributos


  //Configuracion grafico 1
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
      },
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },

    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: categories.map((data) => data.Categoria),
    datasets: [
      { data: categories.map((data)=> data.CalificacionPromedio), label: 'Series A',backgroundColor: "red" },
    ],

  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }

  //Configuracion grafico 2
  @ViewChild(BaseChartDirective) chart2: BaseChartDirective<'bar'> | undefined;
  public barChartOptions2: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,

      },

    },
  };
  public barChartType2 = 'bar' as const;

  public barChartData2: ChartData<'bar'> = {
    labels: titles.map((data) => data.Titulo),
    datasets: [
      { data: titles.map((data)=> data.CostoBase), label: 'Series A' },
    ],
  };

  // events
  public chartClicked2({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered2({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize2(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }


  //Configuracion grafico 3
  @ViewChild(BaseChartDirective) chart3: BaseChartDirective<'pie'> | undefined;
  public barChartOptions3: ChartConfiguration<'pie'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,

      },

    },
  };
  public barChartType3 = 'pie' as const;

  public barChartData3: ChartData<'pie', number[], string | string[]> = {
    labels: resenas.map((data) => data.Categoria),
    datasets: [
      { data: resenas.map((data)=> data.CantidadResenas), label: 'Series A' },
    ],
  };

  // events
  public chartClicked3({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered3({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize3(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }



}















