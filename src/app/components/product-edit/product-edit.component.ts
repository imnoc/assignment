import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../interface/product';
import { ServiceService } from '../../service.service';

import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../category.service';
import { ICategory } from '../../interface/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  constructor(private route: ActivatedRoute, private productService: ServiceService, private categoryService: CategoryService) { }
  categories: ICategory[] = []
  selectedCategory?: string;


  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(7)]),
    image: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    desc: new FormControl('')
  })
  productID = this.route.snapshot.params['id']
  ngOnInit() {
    this.productService.Get_Product_By_ID(this.productID).subscribe(data => {
      console.log(data);
      this.productForm.controls.name.setValue(data.name)
      this.productForm.controls.image.setValue(data.image)
      this.productForm.controls.category.setValue(data.category)
      this.productForm.controls.price.setValue(data.price)
      this.productForm.controls.desc.setValue(data.desc)

    }),
      this.categoryService.Get_All_Category().subscribe(data => {
        console.log(data);
        this.categories = data
      })
  }
  router = new Router()

  onSubmit = () => {
    this.productService.Update_Product(this.productID, this.productForm.value as IProduct).subscribe(data => {
      console.log(data);
      alert('Update product success')
      this.router.navigate(['admin/list'])
    })
  }

  onCategoryChange(event: any): void {
    this.selectedCategory = event.target.value;
  }
}
