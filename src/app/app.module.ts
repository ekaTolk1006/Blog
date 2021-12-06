import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import  enLocate  from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './admin/shared/shared.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { PostComponent } from './shared/components/post/post.component';



registerLocaleData(enLocate, 'ru')


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent,
    MainLayoutComponent,
    PostComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
