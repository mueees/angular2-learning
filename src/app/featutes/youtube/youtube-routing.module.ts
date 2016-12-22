import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
// Component
import {YoutubeComponent} from "./youtube.component";
import {YoutubeVideoInfoComponent} from "./youtube-video-info.component";

// Route
const youtubeRoutes: Routes = [
    {path: 'youtube', component: YoutubeComponent},
    {path: 'youtube/:videoId', component: YoutubeVideoInfoComponent}
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