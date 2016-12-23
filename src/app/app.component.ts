import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>

  <nav>
    <a routerLink="/admin" routerLinkActive="active">Admin</a>
    <a routerLink="/youtube" routerLinkActive="active">Youtube</a>
    <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
  </nav>

  <router-outlet></router-outlet>
`
})
export class AppComponent {
    title: string = 'Angular2';
}