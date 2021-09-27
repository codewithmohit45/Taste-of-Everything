import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  //flag: boolean;
  constructor(private service: CustomerService) {
    //this.flag = this.service.flag;
  }

  ngOnInit() {
    console.log(sessionStorage.getItem('customerName'));
  }


}
