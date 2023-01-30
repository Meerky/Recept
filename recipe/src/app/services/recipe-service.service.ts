import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
BASE_URL='http://localhost:3000/Recipes'

  constructor(private http:HttpClient) { }

  saveNewRecipe(recipe:any):Observable<any>{
    return this.http.post<any>(this.BASE_URL,recipe)
  }

  getRecipeList():Observable<Array<any>>{
    return this.http.get<Array<any>>(this.BASE_URL);
  }

  deleteRecipe(id:any):any{
    return this.http.delete(this.BASE_URL+'/' + id);
  }

  updateRecipeFromServer(id:any,recipe:any):Observable<any>{
    return this.http.put(this.BASE_URL+'/'+id,recipe);
  }

  getOneRecipe(id:any):Observable<Array<any>>{
    return this.http.get<Array<any>>(this.BASE_URL+'/'+id);
  }
}
