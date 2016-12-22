import {Injectable} from "@angular/core";

@Injectable()
export class YoutubeSearchResultModel {
    public title: string;
    public description: string;
    public videoUrl: string;
    public thumbnailUrl: string;
    public videoId: string;

    constructor(obj?: any) {
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.videoUrl = obj && obj.videoUrl || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoId = obj && obj.videoId || null;
    }
}