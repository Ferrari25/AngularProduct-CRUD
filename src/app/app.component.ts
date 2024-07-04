import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductForm } from './components/productform/productform.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ProductForm,FormsModule,ProductListComponent, CommonModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})

export class AppComponent {
  data = {
    titulo: 'CRUD desarrollo',
    description: 'Demo Desarrollo de Software',
    List_caption: 'Products',
    Add_caption: 'Agregar',
    Search_caption: 'Buscar'
  }
}

