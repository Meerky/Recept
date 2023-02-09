import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeServiceService } from '../../services/recipe-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  toDisplay:any;
  recipe:any;
  recipeForm:FormGroup;
  id:number=0;
  Recipes:Array<any>=[];
  ingrediens=[];
  recipes:Array<any>=[];
  chosenRecipe:Array<any>=[];

  constructor(
    private service:RecipeServiceService,
    private router:Router
  ) {
    this.recipeForm= new FormGroup({
      name: new FormControl(''),
      imgUrl: new FormControl(''),
      type:new FormControl(''),
      ingrediens: new FormControl(''),
      preparation: new FormControl('')
      
    })
   }

  ngOnInit(): void {
    this.getRecipe()
  }
  getRecipe(){
    this.service.getRecipeList().subscribe(
      (recipe:any)=>this.Recipes=recipe,
      (err)=>console.log(err)
    )
  }

  chooseRecipe2=(recipe:any)=>{
    this.service.chosenRecipe.next(recipe);
    this.router.navigate(['recipe-card',recipe.id]);
    this.getRecipe()
  }

  chooseRecipe=(recipe:any)=>{
    this.service.chosenRecipe.next(recipe);
    this.router.navigate(['recipe-card',recipe.id]);
    this.getRecipe()
  }
}
