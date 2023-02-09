import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeForm2Component } from './components/recipe-form2/recipe-form2.component';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { HeaderComponent } from './components/header/header.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'card', component: CardComponent },
  { path: 'forms', component: RecipeForm2Component },
  { path: 'list', component: ListComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'recipe-card', component: RecipeCardComponent },
  { path: 'recipe-card/:id', component: RecipeCardComponent },
  { path: 'header', component: HeaderComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
