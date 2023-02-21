import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { RecipeServiceService } from '../../services/recipe-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Output() onCreate:EventEmitter<any>= new EventEmitter();

  recipe:any;
  recipeForm:FormGroup;
  id:number=0;
  Recipes:Array<any>=[];
  ingrediens =[] ;
  
  
    constructor(
      private service: RecipeServiceService,
      private router: Router,
      private route: ActivatedRoute,
      private fb:FormBuilder
    ) { 
      this.recipeForm= new FormGroup({
        name: new FormControl(''),
        imgUrl: new FormControl(''),
        ingrediens: new FormControl(''),
        description: new FormControl('')
      })
    }
  
    ngOnInit(): void {
     
  
      this.route.params.subscribe(params=>{
        this.id= +params['id'];
        console.log(this.id);
        this.getRecipe(this.id);
      });
    }
  
    getRecipe(id:any){
      this.service.getOneRecipe(id).subscribe(
        (recipe:any)=>{
          this.recipe=recipe
        },
        (err)=>console.log(err)
      )
    }
  
  
}
