import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { CategoryService } from '../category.service';
import { IProduct } from '../interface/product';
import { ICategory } from '../interface/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  categories: ICategory[] = [];
  selectedCategory: string = 'all';
  filteredProducts: IProduct[] = [];

  constructor(
    private productService: ServiceService,
    private categoryService: CategoryService,
    private route: ActivatedRoute // Inject ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoryService.Get_All_Category().subscribe(categories => {
      this.categories = categories;
    });

    this.productService.Get_All_Products().subscribe(products => {
      this.products = products;
      this.route.paramMap.subscribe(params => {
        const categoryId = params.get('categoryId');
        this.selectedCategory = categoryId ? categoryId : 'all'; // Set selectedCategory from URL param
        this.filterProductsByCategory();
      });
    });
  }

  filterProductsByCategory(): void {
    this.filteredProducts = this.selectedCategory === 'all' ? this.products : this.products.filter(product => product.category === this.selectedCategory);
  }

  resetFilter(): void {
    this.selectedCategory = 'all';
    this.filterProductsByCategory();
  }
  category(){
    
  }
}
