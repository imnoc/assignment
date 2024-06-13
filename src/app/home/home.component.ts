import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { IProduct } from '../interface/product';
import { ICategory } from '../interface/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private productService: ServiceService, private categoryService: CategoryService) { }
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(7)]),
    image: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
  })
  products: IProduct[] = [];
  categories: ICategory[] = [];
  selectedCategory: string = 'all';
  filteredProducts: IProduct[] = [];

  ngOnInit(): void {
    this.categoryService.Get_All_Category().subscribe(categories => {
      this.categories = categories;
    });

    this.productService.Get_All_Products().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });
  }
  filterProductsByCategory(): void {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
    }
  }


}
