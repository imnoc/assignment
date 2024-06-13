import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service.service';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: IProduct[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ServiceService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const keywords = params['keywords'];
      if (keywords) {
        this.searchProducts(keywords);
      }
    });
  }

  searchProducts(keywords: string): void {
    this.productService.searchProducts(keywords).subscribe(
      (response) => {
        this.products = response;
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
}
