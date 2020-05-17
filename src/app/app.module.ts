import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstFormPageComponent } from './pages/first-form-page/first-form-page.component';
import { ReactiveFormPageComponent } from './pages/reactive-form-page/reactive-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstFormPageComponent,
    ReactiveFormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
