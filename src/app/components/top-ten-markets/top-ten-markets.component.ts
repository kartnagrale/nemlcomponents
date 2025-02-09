
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import HC3D from 'highcharts/highcharts-3d';
import Highcharts3D from 'highcharts/highcharts-3d';

import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-top-ten-markets',
  standalone: true,
  imports: [HighchartsChartModule, RouterOutlet],
  templateUrl: './top-ten-markets.component.html',
  styleUrl: './top-ten-markets.component.scss',
})

export class TopTenMarketsComponent implements OnInit {
  chart!: Highcharts.Chart;

  ngOnInit(): void {
    HC3D(Highcharts);
  }

  ngAfterViewInit(): void {
    const chart = new Highcharts.Chart({
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 0,
          beta: 0,
          depth: 30,
          viewDistance: 20,
        },
      },
      xAxis: {
        type: 'category',
        title: {
          text: 'Markets Ranking'
        }
      },
      yAxis: {
        title: {
          text: 'Trade value in %'
        }
      },
      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Cars sold: {point.y}',
      },
      title: {
        text: 'Texture',
      },
      // subtitle: {
      //   text: `Source: <a href="https://ofv.no/registreringsstatistikk" target="_blank">OFV</a>`,
      // },
      legend: {
        enabled: true,
      },
      plotOptions: {
        column: {
          depth: 25,
        },
      },
      series: [
        {
          type: 'column',
          data: [
            ['Market 01', 90],
            ['Market 02', 80],
            ['Market 03', 70],
            ['Market 04', 60],
            ['Market 05', 50],
            ['Market 06', 40],
            ['Market 07', 35],
            ['Market 08', 30],
            ['Market 09', 25],
            ['Market 10', 20]
          ],
          colorByPoint: false,
        },
      ],
    });

    const sliders = document.querySelectorAll('#sliders input');

    function showValues() {
      (document.getElementById('alpha-value') as HTMLElement).innerHTML =
        String(chart.options.chart?.options3d?.alpha);
      (document.getElementById('beta-value') as HTMLElement).innerHTML =
        String(chart.options.chart?.options3d?.beta);
      (document.getElementById('depth-value') as HTMLElement).innerHTML =
        String(chart.options.chart?.options3d?.depth);
    }

    sliders.forEach((input) => {
      input.addEventListener('input', (e: any) => {
        const target = e.target;
        const optionKey = target.id as keyof Highcharts.Chart3dOptions;
        (chart.options.chart!.options3d! as any)[optionKey] = parseFloat(target.value);
        showValues();
        chart.redraw(false);
      });
    });

  }
}