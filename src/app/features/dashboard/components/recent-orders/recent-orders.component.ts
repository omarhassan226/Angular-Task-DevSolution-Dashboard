import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.scss',
})
export class RecentOrdersComponent {
  orders = [
    {
      image: 'assets/iphone13.png',
      name: 'Iphone 13',
      qty: 1,
      date: 'January 20, 2022',
      amount: 799.0,
      status: 'Pending',
    },
    {
      image: 'assets/xiaomi-redmi-note10.png',
      name: 'Xiaomi Redmi Note 10',
      qty: 1,
      date: 'January 20, 2022',
      amount: 799.0,
      status: 'Approved',
    },
    {
      image: 'assets/placeholder.png',
      name: 'Iphone 13',
      qty: 1,
      date: 'January 20, 2022',
      amount: 799.0,
      status: 'In Process',
    },
  ];
}
