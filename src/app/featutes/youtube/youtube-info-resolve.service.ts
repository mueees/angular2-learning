import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {YoutubeService} from "./youtube.service";
import {YoutubeVideoModel} from "./youtube-video.model";

@Injectable()
export class YoutubeInfoResolve implements Resolve<YoutubeVideoModel> {
    constructor(private youtubeService: YoutubeService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<YoutubeVideoModel> {
        let videoId = route.params['videoId'];

        return this.youtubeService.getVideoInfo(videoId).map((video: YoutubeVideoModel) => {
            if (video) {
                return video;
            } else {
                this.router.navigate(['/youtube']);

                return null;
            }
        }).first();
    }
}