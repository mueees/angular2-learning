import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home.routing";
import {HomeComponent} from "./home.component";
import {ButtonModule} from "../../components/button";
import {TabsModule} from "../../components/tabs";

@NgModule({
    imports: [
        HomeRoutingModule,
        ButtonModule,
        TabsModule
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule {
}
