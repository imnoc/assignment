import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../interface/product';
import { CategoryService } from '../../category.service';
import { ICategory } from '../../interface/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  categories: ICategory[] = []

  selectedCategory?: string;
  constructor(private productService: ServiceService, private categoryService: CategoryService) { }
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(7)]),
    image: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    price:new FormControl('', [Validators.required, Validators.min(0)]),
    desc: new FormControl('')

  })
  router = new Router()
  products: IProduct[] = []
  onSubmit = () => {
    this.productService.Add_Product(this.productForm.value as IProduct).subscribe(data => {
      console.log(data);
      alert('Add product success')
      this.products.push(data as IProduct);
      this.router.navigate(['admin/list'])
    })
  }

  ngOnInit() {
    this.categoryService.Get_All_Category().subscribe(data => {
      console.log(data);
      this.categories = data
    })
  }
  onCategoryChange(event: any): void {
    this.selectedCategory = event.target.value;
  }
}
