import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../core/models/master-data-models';
import { MasterDataService } from '../../core/services/master-data.service';

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

  masterDataService = inject(MasterDataService);

  getProducts() {
    this.masterDataService.getProducts().subscribe({
      next: (_res: Product[]) => {
        this.products = _res;
      },
      error: (err: string) => {
        console.log(err);
      },
    });
  }
}
