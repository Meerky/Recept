import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

   recipeForm:FormGroup;
   Recipes:any=[];
   allSelectedList=['Diab','Traditional','Vegan']


   constructor( 
    private route:Router,
    ) {
    this.recipeForm = new FormGroup({
      name: new FormControl(''),
      imgUrl: new FormControl(''),
      type: new FormControl(''),
      ingrediens: new FormControl('') ,
      
      selectedList: new FormArray([])
    })
  }
    
  
  ngOnInit(): void {
    
  }
 
saveRecipe(){
  let recipe = this.recipeForm.value;
  console.log(recipe);
  return recipe;
}
   
  

 
}
