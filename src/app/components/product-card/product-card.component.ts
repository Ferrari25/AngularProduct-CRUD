import { Component, Input } from '@angular/core';
import { Products } from '../../models/products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true
})
export class ProductCardComponent {
  @Input() currentElement!: Products;
}