import { Component, inject, OnInit } from '@angular/core';
import { MasterDataService } from '../../../../core/services/master-data.service';
import { OrderItem } from '../../../../core/models/master-data-models';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.scss',
})
export class RecentOrdersComponent implements OnInit {
  private masterDataService = inject(MasterDataService);
  public orders: OrderItem [] = [];

  ngOnInit(): void {
    this.masterDataService.getOrders().subscribe({
      next: (data) => {
        this.orders = data;
        console.log(data)
      }
    })
  }

}
