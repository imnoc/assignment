import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from '../../interface/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryadd',
  templateUrl: './categoryadd.component.html',
  styleUrls: ['./categoryadd.component.css'] 
})
export class CategoryaddComponent implements OnInit {
  categories: ICategory[] = [];

  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.categoryService.Get_All_Category().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

  OnDelete(id: any) {
    if (confirm('Are you sure')) {
      this.categoryService.DeletePCategory(id).subscribe(data => {
        alert('Xóa thành công');
        this.categories = this.categories.filter(category => category.id !== id);
      });
    }
  }

  onSubmit = () => {
    this.categoryService.Add_Category(this.categoryForm.value as ICategory).subscribe(data => {
      console.log(data);
      alert('Add product success')
      this.categories.push(data as ICategory);
      this.router.navigate(['admin/list'])
    })
  }
}
