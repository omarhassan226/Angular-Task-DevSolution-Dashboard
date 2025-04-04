import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OrderItem } from '../../../core/models/master-data-models';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent implements AfterViewInit, OnChanges {
  @Input() dataSource: OrderItem[] = [];
  @Input() displayedColumns: string[] = [
    'image',
    'name',
    'qty',
    'date',
    'amount',
    'status',
  ];

  tableDataSource = new MatTableDataSource<OrderItem>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataSource']) {
      this.tableDataSource.data = this.dataSource || [];
    }
  }
}
