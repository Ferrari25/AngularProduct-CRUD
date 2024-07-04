//Este servicio de Angular permite realizar peticiones HTTP.
import { HttpClient } from '@angular/common/http';

//Este decorador marca la clase como un servicio que puede ser inyectado en otros componentes o servicios.
import { Injectable } from '@angular/core';


//De la librería RxJS, representa una fuente de datos que puede ser observada y de la cual se pueden suscribir para recibir datos.
import { Observable } from 'rxjs';


//Un modelo que probablemente define la estructura de los datos que se espera recibir del API.
import { ProductExt, Products } from '../models/products.model';

//Define la URL base para las peticiones HTTP. En este caso, es una URL que devuelve una lista de productos con sus títulos y precios.
const baseUrl = 'https://dummyjson.com/products';

//Indica que este servicio será proporcionado a nivel de raíz, lo que significa que estará disponible en toda la aplicación.
@Injectable({providedIn: 'root'})


export class ProductService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProductExt> {
    return this.http.get<ProductExt>(baseUrl);
  }

  get(id: any): Observable<Products> {
    return this.http.get<Products>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
	  //console.log(data);
    return this.http.post(`${baseUrl}/add`, data);
  }
  update(id: any, data: Products): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data); //{responseType: 'text'}
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`); //, {responseType: 'text'});
  }
  findByTitle(search: any): Observable<ProductExt> {
    return this.http.get<ProductExt>(`${baseUrl}/search?q=${search}&limit=10`);
  }

}

