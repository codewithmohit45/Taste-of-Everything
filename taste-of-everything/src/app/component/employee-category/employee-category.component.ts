import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/class/category/category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-employee-category',
  templateUrl: './employee-category.component.html',
  styleUrls: ['./employee-category.component.css']
})
export class EmployeeCategoryComponent implements OnInit {
  categoryList: Category[];
  category: Category;
  categoryId: number;

  constructor(private categoryService: CategoryService, private router: Router) {
    this.categoryList = [];
    this.category = new Category();
  }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categoryList = res;
    })
  }

  addCategory() {
    this.categoryService.addCategory(this.category).subscribe(res => {
      alert("Category add Successfully");
      this.router.navigate(["/employee/home"]);
    })
  }
  setCategoryId(categoryId: number) {
    this.categoryId = categoryId;
  }
  deleteCategory() {
    this.categoryService.deleteCategory(this.categoryId);
    alert("Category delete Successfully");
    this.router.navigate(["/employee/home"]);
  }

  editCategory() {

  }

}
