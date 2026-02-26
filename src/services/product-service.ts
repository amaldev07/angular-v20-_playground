import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface FilterParams {
  category: string[];
  priceRange: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private mockProducts: Product[] = [
    {
      id: 1,
      name: 'Laptop Pro',
      category: 'Electronics',
      price: 1200,
    },
    {
      id: 2,
      name: 'Running Shoes',
      category: 'Apparel',
      price: 85,
    },
    {
      id: 3,
      name: 'Coffee Maker XL',
      category: 'Home Goods',
      price: 150,
    },
    {
      id: 4,
      name: 'Smartwatch 5',
      category: 'Electronics',
      price: 350,
    },
    {
      id: 5,
      name: 'Designer Jeans',
      category: 'Apparel',
      price: 180,
    },
  ];

  getMockProducts() {
    return this.mockProducts;
  }
}
