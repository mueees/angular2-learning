import {NgModule} from "@angular/core";
import {TooltipDirective} from "./tooltip.directive";
import {TooltipContentComponent} from "./tooltip-content.component";

@NgModule({
    imports: [],
    exports: [
        TooltipContentComponent,
        TooltipDirective
    ],
    declarations: [
        TooltipContentComponent,
        TooltipDirective
    ],
    providers: [],
    entryComponents: [
        // angular knows which components can be lazy loaded in the future
        // and can create factories for them
        TooltipContentComponent
    ]
})
export class TooltipModule {
}