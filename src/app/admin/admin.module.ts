import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


import { LoginPageComponent } from "./login-page/login-page.component";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostPageComponent } from "../post-page/post-page.component";
import { AuthService } from "./shared/components/admin-layout/services/auth.service";
import { SharedModule } from "./shared/shared.module";
import { AuthGuard } from "./shared/components/admin-layout/services/auth.guard";
import { CreatePageService } from "./shared/components/admin-layout/services/create.page.service";



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
            SharedModule,
            CommonModule,
            RouterModule.forChild([
                {path:'',component:AdminLayoutComponent, children :[
                {path:'login',component:LoginPageComponent},
                {path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
                {path:'post/:id/edit',component: PostPageComponent, canActivate:[AuthGuard]},
                {path:'create',component:CreatePageComponent,canActivate:[AuthGuard]}
            ]}
        ])
    ],
        exports:[
            RouterModule,

            
        ],

        providers:[
            AuthGuard,
            CreatePageService]
    })

    export class AdminModule{

    }