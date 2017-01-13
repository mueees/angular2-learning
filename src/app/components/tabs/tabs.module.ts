import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TabsComponent} from "./tabs.component";
import {TabComponent} from "./tab.component";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TabComponent,
        TabsComponent
    ],
    declarations: [
        TabComponent,
        TabsComponent
    ]
})
export class TabsModule {
}