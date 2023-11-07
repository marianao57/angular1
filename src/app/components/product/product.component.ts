import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  //esta es la buena práctica, inicializar los valores
  @Input() product: Product = {
    title: '',
    price: 0,
    images: [],
    id: 1,
  };
}
