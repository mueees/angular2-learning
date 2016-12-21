import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
  <h1>Angular Router</h1>

  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/youtube" routerLinkActive="active">Youtube</a>
  </nav>

  <router-outlet></router-outlet>
`
})
export class AppComponent {
}