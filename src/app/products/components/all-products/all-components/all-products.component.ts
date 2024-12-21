import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  base64: string = '';
  categories: string[] = [];
  products: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  form!: FormGroup;

  constructor(private service: ProductsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.initializeForm();

    console.log('Form initialized:', this.form);
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  getCategories(): void {
    this.loading = true;
    this.service.getAllCategories().subscribe((res: any) => {
      this.loading = false;
      this.categories = res;
    });
  }

  getProducts(): void {
    this.loading = true;
    this.service.getAllProducts().subscribe((res: any) => {
      this.loading = false;
      this.products = res;
    });
  }

  filterCategory(category: string): void {
    if (category === 'all') {
      this.getProducts();
    } else {
      this.loading = true;
      this.service.getProductsByCategory(category).subscribe(
        (res: any) => {
          this.loading = false;
          this.products = res;
        },
        (error) => {
          this.loading = false;
          console.error('Error fetching products by category:', error);
        }
      );
    }
  }

  addToCart(product: any): void {
    if (this.cartProducts.some((item) => item.id === product.id)) {
      alert('This product is already in your cart.');
    } else {
      this.cartProducts.push({ ...product, quantity: 1 });
      alert('Product added to cart!');
    }
  }

  openModal(): void {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  getImagePath(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result as string;
      this.form.get('image')?.setValue(this.base64);
    };
  }

  addProduct() {
    // if (this.form.invalid) {
    //   alert('Please fill in all fields.');
    //   return;
    // }

    // const product = this.form.value;
    // this.service.addProduct(product).subscribe(
    //   (res: any) => {
    //     alert('Product added successfully!');
    //     this.getProducts();
    //     this.form.reset();
    //     this.base64 = '';
    //   },
    //   (error: any) => {
    //     console.error('Error adding product:', error);
    //     alert('Failed to add product. Please try again.');
    //   }
    // );
const model = this.form.value
this.service.createProduct(model).subscribe(res =>{
  alert("add product done successfully")
})
  console.log('Button clicked!');
  console.log(this.form);

  }
}
