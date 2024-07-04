import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Products } from '../../models/products.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ToastrService } from 'ngx-toastr';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductListComponent,CommonModule,ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  //Una propiedad opcional que almacena un arreglo de publicaciones.
  products?:Products[];

  //propiedad que almacena la publicación actualmente seleccionada.
  currentElement: Products = new Products();

  // El constructor inyecta una instancia del ProductService para usarla en el componente.
  constructor(private productService: ProductService,
    private toastr: ToastrService) { }
    

  //Método del ciclo de vida del componente que se ejecuta al inicializarse. Aquí se llama al método retrieveProduct() para obtener las publicaciones.
  ngOnInit(): void {this.retrieveProducts();}

// Método para obtener todas las publicaciones desde el ProductService.
//next: Función que se ejecuta cuando se reciben los datos correctamente, asignando las publicaciones a la propiedad products.
//error: Función que se ejecuta si ocurre un error en la petición, imprimiendo el error en la consola.
retrieveProducts(): void {
  this.productService.getAll()
  .subscribe({
    next: (data) => {
       this.products = data.products;
        if (data && data.products) {
          this.products = data.products;
          console.log(this.products[1]?.price); // Accede al precio del segundo producto si existe
          console.log(data);
        } else {
          console.log(data);
          console.error('Error al recuperar productos:', Error);
        }
    },
    error: (error) => {console.error('Error al recuperar productos:', error);}
  });
}
private tmr: any;

OnKeyUp(search: any) {
  this.retrieveFiltered(search);
}

retrieveFiltered(search: any): void {
  this.productService.findByTitle(search)
    .subscribe({
      next: (data) => {
        this.products = data.products;
        if (this.products.length>0) {
          this.currentElement = this.products[0];
        } else {
          this.currentElement = new Products();
        }
      },
      error: (e) => {
        console.error(e);
        this.toastr.error('Error obteniendo post. Exception: ' + e.error.message, 'Error!',
          {positionClass: 'toast-center-center', timeOut: 6000});
      }
    });
}  


//setActiveElement(element: Product): Método que asigna la publicación seleccionada a currentElement.
  setActiveElement(element: Products): void {this.currentElement = element;}

  alertOnDelete(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
   }

   alertModifyProduct(){
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
   }

   alertSaveChanges(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
   }
}

