import { ProductsService } from './../../../products/services/products.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
})
export class CartsComponent implements OnInit {
  products: any[] = [];
  carts: any[] = [];
  form!: FormGroup;
  details: any = {};
  modalOpen: boolean = false;

  constructor(
    private service: CartsService,
    private cdr: ChangeDetectorRef,
    private build: FormBuilder,
    private ProductsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getAllCarts();
    this.form = this.build.group({
      start: [''],
      end: [''],
    });
  }

  // Get all carts
  getAllCarts() {
    this.service.getAllCarts().subscribe(
      (res: any) => {
        this.carts = Array.isArray(res) ? res : res?.data || [];
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching carts:', error);
      }
    );
  }

  // Calculate total quantity of products in a cart
  getTotalQuantity(products: any[]): number {
    return products.reduce((sum, product) => sum + (product.quantity || 0), 0);
  }

  // Apply filter based on date range
  applyFilter() {
    let date = this.form.value;
    this.service.getAllCarts(date).subscribe((res: any) => {
      this.carts = res;
    });
  }

  // Delete cart
  deleteCart(id: number) {
    this.service.deleteCart(id).subscribe((res) => {
      this.getAllCarts();
      alert('Cart deleted successfully');
    });
  }
  view(index: number) {
    // Set details for the selected cart
    this.details = this.carts[index];
    this.products = [];

    console.log('Cart Details:', this.details);

    // Check if products exist and are in an array format
    if (this.details.products && Array.isArray(this.details.products)) {
      for (let product of this.details.products) {
        const productId = product?.productId; // Access productId safely

        console.log('Product ID:', productId);

        // Ensure productId is valid before making an API call
        if (productId) {
          this.ProductsService.getProductById(productId).subscribe(
            (res) => {
              console.log('Product API Response:', res);
              if (res) {
                const productWithDetails = {
                  ...res,
                  quantity: product.quantity, // Use product's quantity here
                };
                console.log('Product with Details:', productWithDetails);
                this.products.push(productWithDetails);
              } else {
                console.error('Product not found for ID:', productId);
              }
            },
            (error) => {
              console.error('Error fetching product:', error);
            }
          );
        } else {
          console.error(
            'Product ID is undefined or invalid for product',
            product
          );
        }
      }
    } else {
      console.error('No products found in this cart:', this.details);
    }

    // Open the modal
    this.modalOpen = true;
  }

  // Close the modal
  closeModal() {
    this.modalOpen = false;
  }
}
