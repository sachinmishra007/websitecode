import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ExampleComponent } from '../first/child-b/example/example.component';

@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ExampleComponent> {
    canDeactivate(
        component: ExampleComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):   boolean {
        debugger;
        return true;
    }
}