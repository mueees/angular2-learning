import {NgModule}               from '@angular/core';
import {RouterModule, Routes}   from '@angular/router';

// Components


// configure route
const appRoutes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}