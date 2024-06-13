import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { IProduct } from '../interface/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private productService: ServiceService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.Get_Product_By_ID(productId).subscribe(data => {
        this.product = data;
      });
    }
  }
}
