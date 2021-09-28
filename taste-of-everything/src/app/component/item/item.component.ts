import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/class/item/item';
import { ItemService } from 'src/app/service/item/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: number;
  itemList: Item[];
  constructor(private service: ItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    //console.log(sessionStorage.getItem('customerName'));
    this.service.getItemByCategory(this.id).subscribe(res => {
      this.itemList = res;
    })

  }




}
