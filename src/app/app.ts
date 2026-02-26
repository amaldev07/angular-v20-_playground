import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from '../product-list/product-list';
import { SingalComponent } from './singal-component/singal-component';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, SingalComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('my-app');
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getMockProducts();
  }
}
