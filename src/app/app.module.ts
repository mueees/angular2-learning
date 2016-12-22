import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Modules
import {AppComponent}  from './app.component';
import {YoutubeModule} from './featutes/youtube/youtube.module';
import {CrisisCenterModule} from './featutes/crisis-center/crisis-center.module';
import {AdminModule} from './featutes/admin/admin.module';
import {AppRoutingModule} from './app-routing.module';
import {LoginRoutingModule}   from './login-routing.module';

// Components
import {LoginComponent}       from './login.component';

@NgModule({
    imports: [
        BrowserModule,
        YoutubeModule,
        CrisisCenterModule,
        AdminModule,
        LoginRoutingModule,
        AppRoutingModule
    ],

    providers: [],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}