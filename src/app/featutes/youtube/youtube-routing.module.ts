import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {YoutubeInfoResolve} from "./youtube-info-resolve.service";
// Component
import {YoutubeComponent} from "./youtube.component";
import {YoutubeVideoInfoComponent} from "./youtube-video-info.component";
// Guards
import {CanDeactivateGuard} from "../../can-deactivate-guard.service";

// Route
const youtubeRoutes: Routes = [
    {
        path: 'youtube',
        component: YoutubeComponent
    },
    {
        path: 'youtube/:videoId',
        component: YoutubeVideoInfoComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
            video: YoutubeInfoResolve
        }
    }
];

@NgModule({
    imports: [
        // feature routing should use 'forChild' method
        RouterModule.forChild(youtubeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class YoutubeRoutingModule {
}