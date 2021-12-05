import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, Provider } from "@angular/core";
import { QuillModule } from 'ngx-quill'
import { AuthIntercepter } from "./auth.intercepter";

const INTERCEPTOR_PROVIDER: Provider = { 
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthIntercepter
  }
  

@NgModule({

    imports:[
    HttpClientModule,
    QuillModule.forRoot()
    ],


    exports:[
        HttpClientModule,
        QuillModule
       ],
       providers: [INTERCEPTOR_PROVIDER]
})

export class SharedModule{

}