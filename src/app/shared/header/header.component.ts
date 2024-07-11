import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Info } from '../../interfaces/info.interface';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrl: './header.component.css'
})
export class HeaderComponent {

   constructor(public infoService: InfoPaginaService) {}

}
