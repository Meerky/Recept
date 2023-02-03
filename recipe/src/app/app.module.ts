import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeForm2Component } from './components/recipe-form2/recipe-form2.component';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeForm2Component,
    ListComponent,
    UpdateComponent,
    HomeComponent,
    CardComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
