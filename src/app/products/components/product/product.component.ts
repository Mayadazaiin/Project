import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() data: any = [];
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount: number = 0;

  title = '';
  price = 0;
  description = '';
  categories = ['Electronics', 'Clothing', 'Books']; // Example categories
  selectedCategory = '';
  base64: string | ArrayBuffer | null = null;
products: any;

  constructor() {}
  ngOnInit(): void {}
  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
  }
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.base64 = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
    getSelectedCategory(event: string): void {
    this.selectedCategory = event;
  }

  // Method to add the product
  addProduct(): void {
    const newProduct = {
      title: this.title,
      price: this.price,
      category: this.selectedCategory,
      description: this.description,
      image: this.base64
    };
       console.log('Product added:', newProduct);
    // Here you could send newProduct to a backend API or update the list of products in your component
    this.clearForm(); // Optional: Clear form after submission
  }

  // Clear form fields after adding a product
  clearForm(): void {
    this.title = '';
    this.price = 0;
    this.selectedCategory = '';
    this.description = '';
    this.base64 = null;
  }





}
