import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IProduct } from '../../interface/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private productService: ServiceService) { }
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(7)]),
    image: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    desc: new FormControl('')

  })
  products: IProduct[] = []
  ngOnInit() {
    this.productService.Get_All_Products().subscribe(data => {
      console.log(data);
      this.products = data
    })
  }
  OnDelete = (id: any) => {
    if (confirm('Are you sure')) {
      this.productService.DeleteProduct(id).subscribe(data => {
        alert('Xoa thanh cong')
        this.products = this.products.filter(products => products.id !== id)
      })
    }
  }
}
