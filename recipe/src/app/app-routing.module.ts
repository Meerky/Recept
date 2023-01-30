import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
 
import { RecipeForm2Component } from './components/recipe-form2/recipe-form2.component';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';
 


 

const routes: Routes = [
  {path:'',component:RecipeForm2Component},
  {path:'forms',component:RecipeForm2Component},
  {path:'list',component:ListComponent},
  {path:'update',component:UpdateComponent}
 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
