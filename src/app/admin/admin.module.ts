import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


import { LoginPageComponent } from "./login-page/login-page.component";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostPageComponent } from "../post-page/post-page.component";


@NgModule({
    declarations: [
        LoginPageComponent,
        AdminLayoutComponent,
        CreatePageComponent,
        DashboardComponent,
        EditPageComponent],

        imports:[
            ReactiveFormsModule,
            FormsModule,
            CommonModule,
            RouterModule.forChild([
                {path:'',component:AdminLayoutComponent, children :[
                {path:'login',component:LoginPageComponent},
                {path:'dashboard', component:DashboardComponent},
                {path:'post/:id/edit',component: PostPageComponent},
                {path:'create',component:CreatePageComponent}
            ]}
            ])
        
        ],
        exports:[
            RouterModule
        ]
    })

    export class AdminModule{

    }