import { Component } from '@angular/core';
import { ProductService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {

   constructor(public productosService: ProductService) {}

}
