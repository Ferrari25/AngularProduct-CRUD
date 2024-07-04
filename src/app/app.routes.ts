import { Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'product', component: ProductListComponent },
    { path: 'product/:id', component: ProductAddComponent },
    { path: 'add', component: ProductAddComponent }];
