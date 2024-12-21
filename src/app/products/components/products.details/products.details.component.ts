import { ProductsService } from 'src/app/products/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products.details',
  templateUrl: './products.details.component.html',
  styleUrls: ['./products.details.component.css'],
})
export class ProductsDetailsComponent implements OnInit {
  id: any;
  data: any = {};

  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.service.getProductById(this.id).subscribe((res) => {
      this.data = res;
    });
  }
}
