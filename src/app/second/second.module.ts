import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from "../second/second.component";
import { RouterModule, Routes } from '@angular/router';
const _routes: Routes = [
    {
        path: '',
        component: SecondComponent
    }
];
@NgModule({
    declarations: [
        SecondComponent
    ],
    imports: [CommonModule, RouterModule.forChild(_routes)],
    exports: [],
    providers: [],
})
export class SecondModule { }