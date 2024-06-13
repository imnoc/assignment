import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { CategoryaddComponent } from './components/categoryadd/categoryadd.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '', component: ClientComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'search', component: SearchComponent }


    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'list', component: ProductsComponent },
      { path: 'add', component: ProductAddComponent },
      { path: 'cate', component: CategoryaddComponent },
      { path: 'product/edit/:id', component: ProductEditComponent },


    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
