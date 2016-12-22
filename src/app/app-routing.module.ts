import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
// Guards
import {CanDeactivateGuard} from "./can-deactivate-guard.service";

// configure route
const appRoutes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [
        RouterModule
    ],

    providers: [CanDeactivateGuard]
})
export class AppRoutingModule {
}