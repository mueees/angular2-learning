import {Directive, Input, HostListener, ComponentFactoryResolver, ViewContainerRef, ComponentRef} from "@angular/core";
/**
 * ComponentRef - Represents an instance of a Component created via a ComponentFactory.
 * Provides access to the Component Instance as well other objects related to this Component Instance
 *
 * */
import {TooltipContentComponent} from "./tooltip-content.component";

@Directive({
    selector: '[m-tooltip]'
})
export class TooltipDirective {
    @Input('m-tooltip') tooltipText: string;

    private visible: boolean = false;
    private tooltipContentComponent: ComponentRef<TooltipContentComponent>;

    /**
     * viewContainerRef - link to parent component towards to current Host component
     * https://angular.io/docs/ts/latest/api/core/index/ViewContainerRef-class.html
     * https://netbasal.com/angular-2-understanding-viewcontainerref-acc183f3b682#.5d27obopw
     * */
    constructor(private viewContainerRef: ViewContainerRef,
                private resolver: ComponentFactoryResolver) {
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.show();
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.hide();
    }

    show(): void {
        this.visible = true;

        const factory = this.resolver.resolveComponentFactory(TooltipContentComponent);
        this.tooltipContentComponent = this.viewContainerRef.createComponent(factory);

        this.tooltipContentComponent.instance.content = this.tooltipText;
    }

    hide(): void {
        if (this.visible) {
            this.visible = false;

            if (this.tooltipContentComponent) {
                this.tooltipContentComponent.destroy();
            }
        }
    }
}