import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';

import {DashboardModule} from './featutes/dashboard/dashboard.module';

@NgModule({
    imports: [
        DashboardModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}