import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


import { LoginPageComponent } from "./login-page/login-page.component";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "./shared/shared.module";
import { AuthGuard } from "./shared/components/admin-layout/services/auth.guard";
import { CreatePageService } from "./shared/components/admin-layout/services/create.page.service";
import { SearchPipe } from "./shared/components/search.pipe";
import { AlertComponent } from "./shared/components/alert/alert.component";
import { AlertService } from "./shared/components/admin-layout/services/alert.service";



@NgModule({
    declarations: [
        LoginPageComponent,
        AdminLayoutComponent,
        CreatePageComponent,
        DashboardComponent,
        EditPageComponent,
        SearchPipe,
        AlertComponent
        ],

        imports:[
            ReactiveFormsModule,
            FormsModule,
            SharedModule,
            CommonModule,
            RouterModule.forChild([
                {path:'',component:AdminLayoutComponent, children :[
                {path:'login',component:LoginPageComponent},
                {path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
                {path:'post/:id/edit',component: EditPageComponent, canActivate:[AuthGuard]},
                {path:'create',component:CreatePageComponent,canActivate:[AuthGuard]}
            ]}
        ])
    ],
        exports:[
            RouterModule,

            
        ],

        providers:[
            AuthGuard,
            CreatePageService,
            AlertService]
    })

    export class AdminModule{

    }