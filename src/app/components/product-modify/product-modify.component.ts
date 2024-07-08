import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Products } from '../../models/products.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ToastrService } from 'ngx-toastr';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-product-modify',
  standalone: true,
  imports: [],
  templateUrl: './product-modify.component.html',
  styleUrl: './product-modify.component.css'
})
export class ProductModify extends ProductListComponent {

}
