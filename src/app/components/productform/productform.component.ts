import { Component } from '@angular/core';
import { Products } from '../../models/products.model';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productform',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']  
})

export class ProductForm extends Products {
  NewProduct: Products = new Products();


  OnSave() {console.log(this.NewProduct);}


}

