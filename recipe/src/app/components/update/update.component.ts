import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { RecipeServiceService } from '../../services/recipe-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  allSelectedList = ['Diab', 'Traditional', 'Vegan', 'Vegetarian', 'Other'];

  @Input() recipeForm: any = FormGroup;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();

  id: number = 0;
  Recipes = [];

  selectedRecipe: any;


  reciepe = [];

  constructor(
    private http: RecipeServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {

    this.recipeForm = new FormGroup({
      name: new FormControl(''),
      imgUrl: new FormControl(''),
      type: new FormControl(''),
      id: new FormControl(''),
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

    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.getRecipe(this.id);

    });
    this.createSelectedCheckList();

  }
  getRecipe(id: any) {

    this.http.getOneRecipe(id).subscribe(
      (recipe: any) => {

        console.log(recipe)
       // this.recipeForm.setValue(recipe);

       // recipe.ingrediens.map((ing: any)=>{this.ingrediens.push(this.fb.control(ing))});
	   recipe.selectedList
	   this.recipeForm.patchValue({
        name: recipe.name,
        imgUrl: recipe.imgUrl,
        type: recipe.type,
        id: recipe.id,
        selectedList: recipe.selectedList,
        radio:recipe.radio
      });

      const ingredientsControls = recipe.ingrediens.map((ingredient:any) => 
        this.fb.control(ingredient));
      const ingredientsArray = this.fb.array(ingredientsControls);
      this.recipeForm.setControl('ingrediens', ingredientsArray);

      const descriptionControls = recipe.desctription.map((desc:any) => 
        this.fb.control(desc));
      const descriptionArray = this.fb.array(descriptionControls);
      this.recipeForm.setControl('desctription', descriptionArray);
       
      },
      (err) => console.log(err)
    )
  }


  updateRecipe() {
    this.saveRecipe();


    this.router.navigate(['list'])

  }

  saveRecipe() {
    let recipe = this.recipeForm.value;
    recipe.selectedList = this.changeCheckList();

    this.http.updateRecipeFromServer(this.id, recipe).subscribe(
      (recipe: any) => {
        this.onUpdate.emit(recipe)
      }
    )
    console.log(recipe)
    return recipe;
  }



  createSelectedCheckList() {

    this.allSelectedList.forEach(() => {
      (this.recipeForm.controls['selectedList'] as FormArray).push(new FormControl(false))
    });
  }

  changeCheckList() {
    let selectedList: any = [];
    let chosenSelected = this.recipeForm.value.selectedList;

    chosenSelected.forEach((selected: any, index: any) => {
      if (selected) {
        selectedList.push(this.allSelectedList[index])
      }
    });
    return selectedList;

  }

}
