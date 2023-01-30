import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
 
import { Router } from '@angular/router';
import { RecipeServiceService } from '../../services/recipe-service.service';

@Component({
  selector: 'app-recipe-form2',
  templateUrl: './recipe-form2.component.html',
  styleUrls: ['./recipe-form2.component.css']
})
export class RecipeForm2Component implements OnInit {
  // unsubcribe: any

  allSelectedList = ['Diab', 'Traditional', 'Vegan', 'Vegetarian', 'Other','Canning'];
  recipeForm: FormGroup;
 Recipes:any=[];
// type:any=[];


  /************-
   */




  constructor(
   private recipeService: RecipeServiceService,
    private route:Router,
    private fb: FormBuilder) {
    this.recipeForm = new FormGroup({
      name: new FormControl(''),
      imgUrl: new FormControl(''),
      type: new FormControl(''),
      ingrediens: this.fb.array([
        this.fb.control(''),
      ]),
      desctription: this.fb.array([
        this.fb.control(''),
      ]),
      selectedList: new FormArray([])
    })
  }


  get ingrediens() {
    return this.recipeForm.get('ingrediens') as FormArray;
  }
  get desctription() {
    return this.recipeForm.get('desctription') as FormArray;
  }
  addIngrediens() {
    this.ingrediens.push(this.fb.control(''));

  }
  addDescription() {
    this.desctription.push(this.fb.control(''));
  }

  ngOnInit(): void {
    this.createSelectedCheckList();
    // this. sortRecipe();
  }

  saveRecipe() {
    let recipe = this.recipeForm.value;
     recipe.selectedList = this.changeCheckList();
    console.log(recipe);
     this.sendRecipe(recipe);
    return recipe;
  }

   sendRecipe(recipe: any) {
     this.recipeService.saveNewRecipe(recipe).subscribe(
       (recipe: any) => {
        
         console.log('recipe ID:', recipe.id)
       },
       (err) => console.log(err)
     )
   }

  createSelectedCheckList() {

    this.allSelectedList.forEach(() => {
      (this.recipeForm.controls['selectedList'] as FormArray).push(new FormControl(false))
    });
  }

  changeCheckList() {
    let selectedList: any = [];
    let chosenSekected = this.recipeForm.value.selectedList;

    chosenSekected.forEach((selected: any, index: any) => {
      if (selected) {
        selectedList.push(this.allSelectedList[index])
      }
    });
    return selectedList;

  }


   /*-------------------tartalom jegyzékhez sorba rendezés--------*/
//  sortRecipe(){
//   this.recipeService.sortRecipeList().subscribe(
//     (recipe:Array<any>)=>this.Recipes=recipe.sort(function(a:any,b:any):number{
      
      
//       return a.name.trim(' ').toUpperCase()>b.name.trim(' ').toUpperCase()?1:-1;
//     }),
    
   
//   )
// }

}



