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
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { HeaderComponent } from './components/header/header.component';
import { Card2Component } from './components/card2/card2.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeForm2Component,
    ListComponent,
    UpdateComponent,
    HomeComponent,
    CardComponent,
    RecipeCardComponent,
    HeaderComponent,
    Card2Component
 
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
