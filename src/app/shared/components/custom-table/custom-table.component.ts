import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss',
})
export class CustomTableComponent {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [
    'image',
    'name',
    'qty',
    'date',
    'amount',
    'status',
  ];
}
