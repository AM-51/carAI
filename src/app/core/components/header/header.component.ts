import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navOptions = [
    { path: 'landing-page', title: 'Landing Page' },
    { path: 'dashboard', title: 'Dashboard' },
  ];
}
