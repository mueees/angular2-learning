import {NgModule} from "@angular/core";
// Routing
import {CrisisCenterRoutingModule} from "./crisis-center-routing.module";
// Components
import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home.component";
import {CrisisListComponent} from "./crisis-list.component";

@NgModule({
    imports: [
        CrisisCenterRoutingModule
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent,
        CrisisListComponent
    ],
    exports: [],
    providers: []
})
export class CrisisCenterModule {

}