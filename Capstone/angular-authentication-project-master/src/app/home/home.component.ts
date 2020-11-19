import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notify: string;
  products: Product[];
  prices: Number[];

  constructor(private router: Router, private route: ActivatedRoute,private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const key1 = 'loggedin';
      if (params[key1] === 'success') {
        this.notify = 'You have been successfully loggedin. Welcome home';
      }
      console.log(this.productService.findAll())
		this.products = this.productService.findAll();
    });
    // for(var i=0; i<3;i++ ){
    //   this.prices[i]=(this.products[i].price)*1.5;
    // }
  }

}
