import {NgModule}               from '@angular/core';
import {RouterModule, Routes}   from '@angular/router';

// Components
import {YoutubeComponent} from './featutes/youtube/youtube.component';
import {DashboardComponent} from './featutes/dashboard/dashboard.component';

// configure route
const appRoutes:Routes = [
    {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}