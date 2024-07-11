import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/productos.service';
import { Product2 } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {

   public producto: Product2 = {};
   public idProduct: string = '';

   constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
   ) {}

   ngOnInit(): void {

      this.route.params.subscribe( (prm) => {
         // console.log(prm);
         const { id } = prm;
         this.idProduct = id;
         // console.log(id);

         this.productService.cargarProducto(id).subscribe( (producto: Product2) => {
            // console.log(producto)
            this.producto = producto;
         });
      });

   }

}
