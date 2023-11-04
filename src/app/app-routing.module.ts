import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/components/landing-page/landing-page.component';
import { DashboardComponent } from './modules/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
