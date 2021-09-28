import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/class/category/category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  private categoryList: Category[];
  private categoryId: number;
  constructor(private service: CategoryService) {
  }

  ngOnInit() {
    this.service.getAllCategory().subscribe(res => {
      this.categoryList = res;
    })
    //console.log(sessionStorage.getItem('customerName'));
  }
  public setCategoryId(id: number) {
    this.service.categoryId = this.categoryId;
  }


}
