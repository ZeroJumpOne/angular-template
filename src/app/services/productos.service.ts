import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/producto.interface';

@Injectable({
   providedIn: 'root'
})
export class ProductosService {

   public productos: Product[] = [];
   public cargando: boolean = false;

   constructor(private http: HttpClient) {
      this.cargarProductos();
   }

   private cargarProductos() {
      this.cargando = true;

      this.http.get('https://angular-template-b5d99-default-rtdb.firebaseio.com/productos_idx.json')
         .subscribe((productos: any) => {
            // console.log(productos);
            this.productos = productos;
         });

         this.cargando = false;

         // setTimeout( () => {
         //    this.cargando = false;
         // }, 2000);

   }
}
