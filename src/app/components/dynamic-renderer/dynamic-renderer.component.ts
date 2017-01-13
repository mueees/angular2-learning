import {
    Component,
    OnInit,
    ViewChild,
    ViewContainerRef,
    Input,
    ComponentFactoryResolver,
    ReflectiveInjector
} from "@angular/core";

/**
 * ReflectiveInjector - an injector implementation that exposes some static APIs to create injectors.
 *
 */

@Component({
    selector: 'm-dynamic-renderer',
    template: require('./dynamic-renderer.component.html')
})
export class DynamicRendererComponent implements OnInit {
    @Input()
    componentData: {component: any};

    @ViewChild('placeholder', {
        read: ViewContainerRef
    })
    placeholder: ViewContainerRef;

    constructor(private resolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        let injector = ReflectiveInjector.fromResolvedProviders([], this.placeholder.parentInjector);

        let componentFactory = this.resolver.resolveComponentFactory(this.componentData.component);

        let component = componentFactory.create(injector);

        this.placeholder.insert(component.hostView);
    }
}