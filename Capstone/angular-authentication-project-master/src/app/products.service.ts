import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[];

  constructor() {
      this.products = [
          { id: '100', name: 'Sony smart androidTV', price: 110000, photo: 'sony.jpg' },
          { id: '101', name: 'OnePlus 8 Mobile', price: 55000, photo: 'mobile.jpg' },
          { id: '103', name: 'Lenovo i9 Laptop', price: 85000, photo: 'lenova.jpg' }
      ];
  }

  findAll(): Product[] {
      return this.products;
  }

  find(id: string): Product {
      return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
      for (var i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
              return i;
          }
      }
      return -1;
  }
}

export class Product {

  constructor(public id:string,public name:string,public price:number, public photo:string){}
}