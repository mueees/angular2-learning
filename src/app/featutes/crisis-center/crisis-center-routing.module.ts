import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Component
import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';

// Route
const crisisCenterRoutes:Routes = [
    {
        path: '',
        redirectTo: '/crisis-center',
        pathMatch: 'full'
    },
    {
        path: 'crisis-center',
        component: CrisisCenterComponent,
        children: [
            {
                path: '',
                component: CrisisListComponent,
                children: [
                    {
                        path: ':id',
                        component: CrisisDetailComponent
                    },
                    {
                        path: '',
                        component: CrisisCenterHomeComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        // feature routing should use 'forChild' method
        RouterModule.forChild(crisisCenterRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CrisisCenterRoutingModule {
}