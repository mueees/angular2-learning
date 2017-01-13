import {Directive, ElementRef, Input, HostListener} from "@angular/core";

@Directive({
    selector: '[m-highlight]'
})
export class HighlightDirective {
    @Input('m-highlight-color') color: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.color || 'silver');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    constructor(public el: ElementRef) {
    }

    highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}