import { Component, Input } from '@angular/core';
import { Products } from '../../models/products.model';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() viewMode = false;
  @Input() currentElement: Products = new Products();
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  showSuccess() {
    //this.toastr.success('Hello world!', 'Toastr fun!',);
    this.toastr.error('Modificacion no disponible', 'Error', {positionClass: 'toast-center-center', timeOut: 6000})
  }

  // OnDelete() {
  //   if (confirm('Seguro de querer eliminar?')) {
  //      this.productService.delete(this.currentElement.id)
  //        .subscribe({
  //          next: (res) => {
  //            console.log(res);
  //            this.toastr.success('Post eliminado con exito!','Eliminado!',
  //                {positionClass: 'toast-center-center', timeOut: 2000});
  //            this.router.navigate(['/']);
  //          },
  //          error: (e) =>
  //          {
  //            console.error(e);
  //            this.toastr.error('Error eliminando post. Exception: ' + e.error.message, 'Error!',
  //              {positionClass: 'toast-center-center', timeOut: 6000}
  //            ) 
  //          } 
  //        });
  //    }
  //  }
   OnDelete(){
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
   }

}

