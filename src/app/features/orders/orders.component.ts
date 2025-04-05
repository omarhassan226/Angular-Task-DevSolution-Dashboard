import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../core/models/master-data-models';
import { MasterDataService } from '../../core/services/master-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  ngOnInit(): void {
    this.getProducts();
  }
  products: Product[] = [];

  isLoading: any = false;

  masterDataService = inject(MasterDataService);

  getProducts() {
    this.isLoading = true;
    this.masterDataService.getProducts().subscribe({
      next: (_res: Product[]) => {
        this.products = _res;
        this.isLoading = false;
      },
      error: (err: string) => {
        this.isLoading = false;
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong in products, Try again later!',
          icon: 'error',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        });
      },
    });
  }
}
