import {Component} from "@angular/core";

// The CrisisCenterComponent is much like the AppComponent shell
@Component({
    // Unlike AppComponent (and most other components), it lacks a selector.
    // It doesn't need one. We don't embed this component in a parent template.
    // We navigate to it from the outside, via the router.

    template: `
        <h1>Crisis center</h1>

        <router-outlet></router-outlet>
    `
})
export class CrisisCenterComponent {

}