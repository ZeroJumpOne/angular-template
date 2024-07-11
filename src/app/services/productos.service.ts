import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Product2 } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ProductService {

   public productos: Product[] = [];
   public productosFiltrados: Product[] = [];
   public cargando: boolean = false;

   constructor(private http: HttpClient) {
      this.cargarProductos();
   }

   private cargarProductos() {
      this.cargando = true;

      return new Promise((resolve, reject) => {
         this.http.get('https://angular-template-b5d99-default-rtdb.firebaseio.com/productos_idx.json')
            .subscribe((productos: any) => {
               // console.log(productos);
               this.productos = productos;
               this.cargando = false;
               // resolve(void);
            });

      });

      // setTimeout( () => {
      //    this.cargando = false;
      // }, 2000);

   }

   public cargarProducto(id: string): Observable<Product2> {
      return this.http.get(`https://angular-template-b5d99-default-rtdb.firebaseio.com/productos/${id}.json`);
   }

   public buscarProducto(cual: string) {

      if (this.productos.length === 0) {
         this.cargarProductos().then(() => {

            this.filtrarProductos(cual);

         });
      } else {
         this.filtrarProductos(cual);
      }

      // this.productosFiltrados = this.productos.filter(producto => {
      //    return true;
      // });

      // console.log(this.productosFiltrados);


   }

   private filtrarProductos(cual: string) {
      // console.log(cual);

      this.productosFiltrados = [];
      // console.log(this.productosFiltrados);

      cual = cual.toLocaleLowerCase();

      this.productos.forEach( prod => {

         const tituloLower = prod.titulo.toLocaleLowerCase();
         const categoriaLower = prod.categoria.toLocaleLowerCase();

         if (categoriaLower.indexOf(cual) >= 0 || tituloLower.indexOf(cual) >= 0) {

            this.productosFiltrados.push( prod );

         }

      })


   }
}
