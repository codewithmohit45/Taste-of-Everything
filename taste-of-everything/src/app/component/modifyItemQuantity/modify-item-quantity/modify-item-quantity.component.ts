import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-item-quantity',
  templateUrl: './modify-item-quantity.component.html',
  styleUrls: ['./modify-item-quantity.component.css']
})
export class ModifyItemQuantityComponent implements OnInit {
  qty: number;
  constructor() {
    this.qty = 1;
  }

  ngOnInit() {
  }
  plus() {
    this.qty += 1;
  }
  minus() {
    if (this.qty > 1) {
      this.qty -= 1;
    }
  }
};
