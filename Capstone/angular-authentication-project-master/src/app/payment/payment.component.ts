import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
		private productService: ProductsService,
		private route: Router) { }

  ngOnInit(): void {
  }

  placeOrder() {
		if(localStorage['login_status'] != '1'){
            alert('Please login to continue')
            this.route.navigate(['/auth/login'])
		}
		else{
      alert('Order placed successfully!!')
			this.route.navigate(['/login'])
		}
	}

}
