import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {PreliminaryPageComponent} from "./page/preliminary-page/preliminary-page.component"
import { AuthGuard } from "./shered/classes/auth.guard";
import { AuthLayoutComponent } from "./shered/layouts/auth-layout/auth-layout.component";
import { SiteLayoutComponent } from "./shered/layouts/site-layout/site-layout.component";

const routes: Routes = [
  /*  {
        path: '', 
        component: AuthLayoutComponent, canActivate: [AuthGuard]s,
        children: [
          //  {path: '', redirectTo: '/login', pathMatch: 'full'},
            //{path: 'login', component: LoginPageComponent},
            //{path: 'registration', component: RegisterPageComponent}
        ]
    },*/
    {
        path: '', 
        component: SiteLayoutComponent,
        children: [
            {path: '', redirectTo: '/fff', pathMatch: 'full'},
            {path: 'fff', component: PreliminaryPageComponent}
        ]
    }
    
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}