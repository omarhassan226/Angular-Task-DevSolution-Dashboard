// loader.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  @Input() visible: boolean = false;
  @Input() size: number = 50;
  @Input() color: string = 'primary';
  @Input() text: string = '';
}
