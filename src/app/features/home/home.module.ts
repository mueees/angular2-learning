import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home.routing";
import {HomeComponent} from "./home.component";
import {ButtonModule} from "../../components/button";
import {TabsModule} from "../../components/tabs";
import {HighlightModule} from "../../directives/highlight";
import {TooltipModule} from "../../directives/tooltip";
import {DynamicRendererModule} from "../../components/dynamic-renderer";
import {DummyModule} from "../../components/dummy";

@NgModule({
    imports: [
        HomeRoutingModule,
        ButtonModule,
        TabsModule,
        HighlightModule,
        TooltipModule,
        DummyModule,
        DynamicRendererModule
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule {
}
