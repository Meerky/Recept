import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
 
import { RecipeForm2Component } from './components/recipe-form2/recipe-form2.component';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
 


 

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'card',component:CardComponent},
  {path:'forms',component:RecipeForm2Component},
  {path:'list',component:ListComponent},
  {path:'update/:id',component:UpdateComponent}
 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
