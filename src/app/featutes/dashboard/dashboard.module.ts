import {NgModule} from '@angular/core';

import {CommonModule} from '../common/common.module'
import {DashboardComponent} from './dashboard.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
    providers: []
})
export class DashboardModule {

}