import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms' ;
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import UserService from './services/user-service.service';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimpleFormComponent,
    ReactiveFormComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
    
  ],
  providers: [UserService, { "provide" : "API_HOST", "useValue" : "http://jsonplaceholder.typicode.com"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
