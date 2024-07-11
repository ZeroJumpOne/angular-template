import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrl: './header.component.css'
})
export class HeaderComponent {

   constructor(
      public infoService: InfoPaginaService,
      private router: Router,
   ) {}

   public buscarProducto(cual: string) {
      if (cual.length < 1) return; //No se hace la busqueda

      this.router.navigateByUrl(`search/${cual}`)


      // console.log(cual);


   }

}
