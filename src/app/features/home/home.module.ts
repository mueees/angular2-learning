import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home.routing";
import {HomeComponent} from "./home.component";
import {ButtonModule} from "../../components/button";

@NgModule({
    imports: [
        HomeRoutingModule,
        ButtonModule
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule {
}
