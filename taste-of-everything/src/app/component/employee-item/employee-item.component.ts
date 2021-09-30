import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/class/category/category';
import { Item } from 'src/app/class/item/item';
import { CategoryService } from 'src/app/service/category/category.service';
import { ItemService } from 'src/app/service/item/item.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  itemList: Item[];
  item: Item;
  categoryId: number;
  category: Category;
  constructor(private itemService: ItemService, private categoryService: CategoryService, private router: Router) {
    this.itemList = [];
    this.item = new Item();
  }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(res => {
      this.itemList = res;
    })
  }

  addItem() {
    this.categoryService.getCategoryById(this.categoryId).subscribe(res => {
      this.category = res;
    });
    this.item.category = this.category;
    this.itemService.addItem(this.item).subscribe(res => {
      alert("Item add Successfully");
      this.router.navigate(["/employee/home"]);
    })
  }

  editItem() {

  }

  deleteItem() {

  }

}
