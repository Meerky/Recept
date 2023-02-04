import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeServiceService } from '../../services/recipe-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  
 
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
    private router: Router
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

  }

  chooseRecipe = (type: any) => {
    // this.http.chosenRecipe.next(type);
    this.router.navigate(['try-card',type]);
    // this.getRecipe()

  }


  selectedList: Array<any> = [];

  showByCategory(category:any,recipeType:any) {
    this.toDisplay = category?category:recipeType;
    this.recipes = this.Recipes.filter(recipe => recipe.selectedList.indexOf(category) != -1 ||  recipe.type === recipeType);
    this.toDisplay;
     this.getRecipe();
  }

    getRecipe() {
      this.service.getRecipeList().subscribe(
        (recipe: any) => this.Recipes = recipe,

        (err) => console.log(err)
      )

    }

 showSoupOnly(type:any){
   this.toDisplay=type?type:'';
   this.recipes = this.Recipes.filter(recipe=>recipe.type.indexOf(type)!= -1 );
   this.toDisplay;
   this.getRecipe();
 }
 

showByCategory2(category:any ) {
  this.toDisplay = category?category:"" ;
  this.recipes = this.Recipes.filter(recipe => recipe.selectedList.indexOf(category) != -1  );
  this.toDisplay;
   this.getRecipe();
}


 
}
