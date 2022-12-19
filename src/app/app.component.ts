import { IProduct } from './models/product';
import { products as data } from "./data/products";
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Learniang app'

  products: IProduct[] = data
}
