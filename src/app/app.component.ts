import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {

   constructor(infoService: InfoPaginaService) { }

}
