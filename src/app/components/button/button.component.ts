import {Component, ViewEncapsulation, ElementRef, Renderer, Input} from "@angular/core";

@Component({
    selector: 'm-button',
    template: require('./button.component.html'),
    styles: [require('./button.component.css')],
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
    private _color: string;

    constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    }

    @Input()
    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._updateColor(value);
    }

    _updateColor(newColor: string) {
        this._color = newColor;

        if (newColor != null && newColor != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, `m-${newColor}`, true);
        }
    }
}