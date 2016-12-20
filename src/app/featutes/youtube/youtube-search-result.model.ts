export class YoutubeSearchResultModel {
    public id:string;
    public title:string;
    public description:string;
    public videoUrl:string;

    constructor(obj?:any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.videoUrl = obj && obj.videoUrl || null;
    }
}