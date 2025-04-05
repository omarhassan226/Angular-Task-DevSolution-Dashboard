import { Component, inject, OnInit } from '@angular/core';
import { MasterDataService } from '../../../../core/services/master-data.service';
import { OrderItem } from '../../../../core/models/master-data-models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.scss',
})
export class RecentOrdersComponent implements OnInit {
  private masterDataService = inject(MasterDataService);
  public orders: OrderItem[] = [];
  isloading: any = false;

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.isloading = true;
    this.masterDataService.getOrders().subscribe({
      next: (data) => {
        this.isloading = false;
        this.orders = data;
      },
      error: (err: string) => {
        this.isloading = false;
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong, Try again later!',
          icon: 'error',
          showCancelButton: true,
          cancelButtonColor: '#d33',
        });
      },
    });
  }
}
