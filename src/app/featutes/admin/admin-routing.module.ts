import { NgModule }       from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Guards
import { AuthGuard } from '../../auth-guard.service';

// Components
import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { ManageCrisesComponent }    from './manage-crisis.component';
import { ManageHeroesComponent }    from './manage-heroes.component';

const adminRoutes:Routes = [
    {
        path: 'admin',
        component: AdminComponent,

        // add guard
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    {path: 'crises', component: ManageCrisesComponent},
                    {path: 'heroes', component: ManageHeroesComponent},
                    {path: '', component: AdminDashboardComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {
}