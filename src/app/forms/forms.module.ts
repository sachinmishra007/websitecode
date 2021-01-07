import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from "../forms/forms.component";
const _routes: Routes = [
    {
        path: '',
        component: FormsComponent
    }
]
@NgModule({
    declarations: [
        FormsComponent
    ],
    imports: [CommonModule, RouterModule.forChild(_routes)],
    exports: [],
    providers: [],
})
export class FormsModule { }