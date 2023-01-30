import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RecipeServiceService } from '../../services/recipe-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  Recipes:Array<any>=[];
  selectedRecipe:any;
  reciepe=[];
  recipeForm:any=FormGroup;
  
    constructor(private recipeService:RecipeServiceService,
      private router:Router) {
      
  
     }
  
    ngOnInit(): void {
      this.getRecipe();
    }
  
  
  getRecipe(){
    this.recipeService.getRecipeList().subscribe(
      (recipe:Array<any>)=> this.Recipes=recipe,
      err=> console.log(err)
    )  
  }
  
  deleteRecipe(id:any){
    this.recipeService.deleteRecipe(id).subscribe( ()=>{
        this.getRecipe();
      }
    );
  }
  
  updateRecipe() {
  
     let recipe=this.recipeForm.value;
     this.recipeService.updateRecipeFromServer(recipe.id,recipe).subscribe();
    
  }
  
  updateRecipes(recipe:any){
  this.router.navigate(['update',recipe.id]);
  }
}
