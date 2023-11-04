import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LandingPageComponent, DashboardComponent],
  imports: [CommonModule, SharedModule],
  providers: [],
})
export class ModulesModule {}
