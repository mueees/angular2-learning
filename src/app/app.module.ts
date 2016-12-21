import {NgModule}      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import {AppComponent}  from './app.component';
import {DashboardModule} from './featutes/dashboard/dashboard.module';
import {YoutubeModule} from './featutes/youtube/youtube.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        DashboardModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}