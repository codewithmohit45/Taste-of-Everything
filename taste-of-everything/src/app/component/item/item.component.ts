import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/class/address/address';
import { Cart } from 'src/app/class/cart/cart';
import { Customer } from 'src/app/class/customer/customer';
import { Item } from 'src/app/class/item/item';
import { Order } from 'src/app/class/order/order';
import { AddressService } from 'src/app/service/address/address.service';
import { CartService } from 'src/app/service/cart/cart.service';
import { CustomerService } from 'src/app/service/customer/customer.service';
import { ItemService } from 'src/app/service/item/item.service';
import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: number;
  itemList: Item[];
  newItemList: Item[];
  itemIdList: Array<number>;
  qty: number;
  itemId: number;
  i: number;
  customer: Customer;
  cart: Cart;
  cartList: Cart[];
  orderAddress: Address;
  customerOrder: Order;
  customerCart: any;


  constructor(private itemService: ItemService, private cartService: CartService, private customerService: CustomerService,
    private orderService: OrderService, private addressService: AddressService, private router: Router, private route: ActivatedRoute) {

    this.itemIdList = [];
    this.itemList = [];
    this.newItemList = [];
    this.orderAddress = new Address();
    this.qty = 1;
    this.customerCart = {};
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    //console.log(sessionStorage.getItem('customerName'));
    this.itemService.getItemByCategory(this.id).subscribe(res => {
      this.itemList = res;
      this.customer = this.customerService.customer;
    })
  }

  changeFlag(item: Item) {
    this.itemId = item.itemId;
    this.itemIdList.push(item.itemId);
    this.newItemList.push(item);
    this.itemService.itemIdList = this.itemIdList;
    this.customerCart[this.itemId] = 1;
  }

  plus(itemId: number) {
    if (this.customerCart.hasOwnProperty(itemId)) {
      this.customerCart[itemId] += 1;
    }
  }

  minus(itemId: number) {
    if (this.customerCart.hasOwnProperty(itemId)) {
      if (this.customerCart[itemId] > 1) {
        this.customerCart[itemId] -= 1;
      }
      else {
        this.itemIdList = this.itemIdList.filter(value => value != itemId);
        this.newItemList = this.newItemList.filter(value => value.itemId != itemId);
        delete this.customerCart[itemId];
        this.itemService.itemIdList = this.itemIdList;
      }
    }
  }

  viewCart() {
    if (this.newItemList.length) {
      for (this.i = 0; this.i < this.newItemList.length; this.i++) {
        this.cart = new Cart(this.customer, this.newItemList[this.i], this.customerCart[this.newItemList[this.i].itemId]);
        this.cartService.addItemInCart(this.cart).subscribe(res => {
        });
      }
    }
    this.getAllItemFromCart();

  }

  getAllItemFromCart() {
    this.cartService.getAllItemFromCart(this.customer.customerId).subscribe(res => {
      this.cartList = res;
    });
  }

  order() {
    this.orderAddress.customer = this.customer;
    this.addressService.addAddress(this.orderAddress).subscribe(res => {
      if (this.cartList.length) {
        for (this.i = 0; this.i < this.cartList.length; this.i++) {
          this.customerOrder = new Order(this.customer, this.cartList[this.i].item, this.cartList[this.i].quantity, "Ordered", res);
          this.orderService.addOrder(this.customerOrder).subscribe(res => {
          });
        }
        this.cartService.deleteCartByCustomerId(this.customer.customerId);
        alert("Ordered Successfully Done");
        this.router.navigate(["/"]);
      }
    });

  }

}