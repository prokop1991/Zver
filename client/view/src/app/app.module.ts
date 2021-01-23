import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PreliminaryPageComponent } from './page/preliminary-page/preliminary-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './shered/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shered/layouts/site-layout/site-layout.component';
import { TokenInterceptor } from './shered/classes/token.interceptor';
import { NavbarComponent } from './shered/layouts/components/navbar/navbar.component'
import { SidebarComponent } from './shered/layouts/components/sidebar/sidebar.component'
import { FooterComponent } from './shered/layouts/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    PreliminaryPageComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
