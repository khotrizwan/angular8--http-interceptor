import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './city/list/list.component';
import { AddComponent } from './city/add/add.component';
import { ViewComponent } from './city/view/view.component';
import { EditComponent } from './city/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MyInterceptor } from './my-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
