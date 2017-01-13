import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home.routing";
import {HomeComponent} from "./home.component";
import {ButtonModule} from "../../components/button";
import {TabsModule} from "../../components/tabs";
import {HighlightModule} from "../../directives/highlight";
import {TooltipModule} from "../../directives/tooltip";

@NgModule({
    imports: [
        HomeRoutingModule,
        ButtonModule,
        TabsModule,
        HighlightModule,
        TooltipModule
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule {
}
