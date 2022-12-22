import { ModalService } from './services/modal.service';
import { Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
// import { products as data } from "./data/products";
import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Learniang app'
  // products: IProduct[] = []
  loading = false
  // products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
  }
}
