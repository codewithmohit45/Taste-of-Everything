import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/class/order/order';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderList: Order[];
  customerId: number;
  constructor(private orderService: OrderService, private customerService: CustomerService) {
    this.orderList = [];
  }

  ngOnInit() {
    this.customerId = this.customerService.customer.customerId;
    this.orderService.getOrderByCustomerId(this.customerId).subscribe(res => {
      this.orderList = res;
    });
  }

}
