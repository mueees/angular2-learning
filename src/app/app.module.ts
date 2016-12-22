import {NgModule}      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import {AppComponent}  from './app.component';
import {YoutubeModule} from './featutes/youtube/youtube.module';
import {CrisisCenterModule} from './featutes/crisis-center/crisis-center.module';
import {AdminModule} from './featutes/admin/admin.module';
import {AppRoutingModule} from './app-routing.module';

// Services
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
    imports: [
        BrowserModule,
        YoutubeModule,
        CrisisCenterModule,
        AdminModule,
        AppRoutingModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}