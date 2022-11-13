import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '../../layout/layout.module';
import * as CanvasJSAngularChart from '../../../../assets/canvasjs/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;



@NgModule({
  declarations: [
    DashboardComponent,
    CanvasJSChart
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    
  ]
})
export class DashboardModule { }
