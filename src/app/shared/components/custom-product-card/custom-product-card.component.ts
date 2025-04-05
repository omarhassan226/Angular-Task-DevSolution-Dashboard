import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-product-card',
  templateUrl: './custom-product-card.component.html',
  styleUrl: './custom-product-card.component.scss',
})
export class CustomProductCardComponent {
  @Input() product = {
    _id: '',
    title: '',
    price: 0,
    icon: '',
    createdOn: '',
  };
}
