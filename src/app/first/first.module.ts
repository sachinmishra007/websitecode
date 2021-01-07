import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from "../first/first.component";
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildCComponent } from './child-c/child-c.component';
import { CanActivateTeam } from "../../app/services/canActivate.service";
import { CanLoadService } from "../services/canload.service";
import { CanDeactivateGuard } from "../services/canDeactivate.service";
const _routes: Routes = [
    {
        path: '',
        component: FirstComponent,
        children: [
            {
                path: 'child-a',
                component: ChildAComponent
            },
            {
                path: 'child-b',
                loadChildren: () => import('../first/child-b/child-b.module').then(_com => _com.ChildB1Module),
                canLoad: [CanLoadService]
            },
            {
                path: 'child-c',
                component: ChildCComponent,
                canActivate: [CanActivateTeam],
                canDeactivate:[CanDeactivateGuard]
            }
        ]
    }
]

@NgModule({
    declarations: [FirstComponent],
    imports: [CommonModule, RouterModule.forChild(_routes)],
    exports: [],
    providers: [],
})
export class FirstModule { }