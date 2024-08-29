import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  product?: IProduct
  loading = true
  color = ''

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.apiService.getProductById(Number(params['productId'])).subscribe((data: IProduct) => {
          this.product = data
        })
      })
      this.color = this.product?.price as number > 5 ? 'red' : ''
      this.loading = false

  }
}
