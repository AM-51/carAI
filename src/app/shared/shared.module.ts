import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_COLOR_FORMATS,
  NgxMatColorPickerModule,
  NGX_MAT_COLOR_FORMATS,
} from '@angular-material-components/color-picker';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { RadialChartComponent } from './components/radial-chart/radial-chart.component';
import { PercentChartComponent } from './components/percent-chart/percent-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    PieChartComponent,
    RadialChartComponent,
    PercentChartComponent,
    BarChartComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    NgxMatColorPickerModule,
    RouterModule,
    MatSnackBarModule,
    NgApexchartsModule,
    MatTableModule,
  ],
  providers: [{ provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }],
  exports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    NgxMatColorPickerModule,
    RouterModule,
    MatSnackBarModule,
    NgApexchartsModule,
    PieChartComponent,
    RadialChartComponent,
    PercentChartComponent,
    BarChartComponent,
    MatTableModule,
  ],
})
export class SharedModule {}
