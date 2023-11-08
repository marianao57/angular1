import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  //el selector es la manera en que vamos a llamar el componente en html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prueba';
  http = inject(HttpClient);
  products: Product[] = [];

  //Funcion para cambiar un valor de una variable
  changeTitle() {
    this.title = 'nuevo titulo';
  }

  //Este es un disparador, en este caso se va a consumir una api
  //No es una promesa, se utiliza rxjs, no hay promise por lo cual se usa .suscribe
  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      //en resp se tiene el json de la api
      .subscribe((data) => {
        this.products = data
      });
  }
}
