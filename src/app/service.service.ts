import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  API_URL:string='http://localhost:3000/products'

  Get_All_Products = ():Observable<any>=>{
    return this.http.get(this.API_URL)
  }

  Get_Product_By_ID =(id:string):Observable<any>=>{
    return this.http.get(this.API_URL+'/'+id)
  }
  Update_Product = (id:string,data:IProduct):Observable<any>=>{
    return this.http.put(this.API_URL+'/'+id,data)
  }
  Add_Product = (data:IProduct)=>{
    return this.http.post(this.API_URL,data)
  }
  DeleteProduct=(id:any)=>{
    return this.http.delete(this.API_URL+'/'+id)
  }

  searchProducts(keywords: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}?name_like=${keywords}`);  }
}
