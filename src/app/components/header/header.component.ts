import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';
import { CategoryService } from '../../category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private categoryService: CategoryService, private productService: ServiceService) { }
  searchForm= new FormGroup({
    keywords: new FormControl('')
  })
  product:IProduct[]=[]

  router = new Router
  onSearch=()=>{
    const keywords = this.searchForm.controls.keywords.value
    this.router.navigate(['search'],{
      queryParams:{keywords:keywords}
    })
  }
}
  

