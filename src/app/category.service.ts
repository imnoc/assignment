import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from './interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  API_URL:string='http://localhost:3000/categories'

  Get_All_Category=():Observable<any>=>{
    return this.http.get(this.API_URL)
  }
  Add_Category(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(this.API_URL, category);
  }
  DeletePCategory=(id:any)=>{
    return this.http.delete(this.API_URL+'/'+id)
  }
}
