import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
// Modules
import {AppRoutingModule} from "./app.routing";
import {HomeModule} from "./features/home";
// Components
import {AppComponent} from "./app.component";
import {BaseComponent} from "./base.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        HomeModule
    ],
    declarations: [
        AppComponent,
        BaseComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}