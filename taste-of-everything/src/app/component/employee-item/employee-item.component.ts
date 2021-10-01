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
  itemId: number;
  categoryId: number;

  constructor(private itemService: ItemService, private categoryService: CategoryService, private router: Router) {
    this.itemList = [];
    this.item = new Item();
  }

  ngOnInit() {
    this.getAllItem();
  }

  getAllItem() {
    this.itemService.getAllItems().subscribe(res => {
      this.itemList = res;
    })
  }

  addItem() {
    this.categoryService.getCategoryById(this.categoryId).subscribe(res => {
      this.item.category = res;
      this.itemService.addItem(this.item).subscribe(res => {
        alert("Item add Successfully");
        this.getAllItem();
      })
    });
  }

  editItem() {

  }

  setItemId(itemId: number) {
    this.itemId = itemId;
  }
  deleteItem() {
    this.itemService.deleteItem(this.itemId);
    alert("Item delete Successfully");
    this.router.navigate(["/employee/home"]);
  }

}
