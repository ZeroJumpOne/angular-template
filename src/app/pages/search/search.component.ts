import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

   constructor(
      private route: ActivatedRoute,
      public productService: ProductService,
   ) {}

   ngOnInit(): void {
      this.route.params.subscribe( (prm) => {
         // console.log(prm);
         const { cual } = prm;

         this.productService.buscarProducto(cual);

      })
   }

}
