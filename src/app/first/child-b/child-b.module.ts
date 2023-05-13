import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { RootComponent } from './root/root.component'; 
import { ResolveGuard } from "../../services/resolver.service";

const _routes: Routes = [


    {
        path: '',
        component: RootComponent,
        resolve: {
            data: ResolveGuard
        }
    },
    {
        path: 'example',
        component: ExampleComponent
    }
]

@NgModule({
    declarations: [RootComponent],
    imports: [CommonModule, RouterModule.forChild(_routes)],
    exports: [],
    providers: [],
})
export class ChildB1Module { }