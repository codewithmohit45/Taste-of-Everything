import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/class/order/order';
import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  order: Order;
  orderList: Order[];
  constructor(private orderService: OrderService, private router: Router) {
    this.orderList = [];
  }

  ngOnInit() {
    this.orderService.getOrderByStatus().subscribe(res => {
      this.orderList = res;
    })
  }

  changeOrderStatus(order: Order) {
    alert("Updated Successfully");
    order.orderStatus = "Delivered";
    this.orderService.updateOrder(order).subscribe();
  }

}
