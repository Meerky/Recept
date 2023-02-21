import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeServiceService } from '../../services/recipe-service.service';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() onCreate:EventEmitter<any>= new EventEmitter();
  toDisplay: any;
  recipe: any;
  recipeForm: FormGroup;
  id: number = 0;
  Recipes: Array<any> = [];
  ingrediens = [];
  recipes: Array<any> = [];
  chosenRecipe: Array<any> = [];

  constructor(
    private service:RecipeServiceService,
   private router: Router,
   private route:ActivatedRoute,
   private fb:FormBuilder
 ) {
   this.recipeForm = new FormGroup({
     name: new FormControl(''),
     imgUrl: new FormControl(''),
     type: new FormControl(''),
     ingrediens: new FormControl(''),
     selectedList: new FormArray([]),
     preparation: new FormControl('')

   })
 }
type:any;

 ngOnInit(): void {
    // this.getRecipe();
    this.route.params.subscribe(params=>{
      this.type=+ params['type'];
      console.log(this.type);
      this.getRecipe(this.type)
    })

 }

 chooseRecipe = (recipe: any /*type:any*/) => {
    this.service.chosenRecipe.next(recipe);
  //  this.router.navigate(['try-card',type]);
  //  this.router.navigate(['card2',recipe.id]);
  //  this.getRecipe()

 }


 selectedList: Array<any> = [];

 showByCategory(category:any,recipeType:any) {
   this.toDisplay = category?category:recipeType;
   this.recipes = this.Recipes.filter(recipe => recipe.selectedList.indexOf(category) != -1 ||  recipe.type === recipeType);
   this.toDisplay;
    // this.getRecipe();
 }

   getRecipe(type:any) {
     this.service.getRecipeType(type).subscribe(
       (recipe: any) => this.Recipes = recipe,

       (err) => console.log(err)
     )

   }

showType(type:any){
  this.toDisplay=type?type:'';
  this.recipes = this.Recipes.filter(recipe=>recipe.type.indexOf(type)!= -1 );
  this.toDisplay;
  // this.getRecipe();
}


showByCategory2(category:any ) {
 this.toDisplay = category?category:"" ;
 this.recipes = this.Recipes.filter(recipe => recipe.selectedList.indexOf(category) != -1  );
 this.toDisplay;
  // this.getRecipe();
}

}
