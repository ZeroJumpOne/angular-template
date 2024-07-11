import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Info } from '../interfaces/info.interface';

@Injectable({
   providedIn: 'root'
})
export class InfoPaginaService {

   public info: Info = {};
   public cargada: boolean = false;

   constructor(private http: HttpClient) {

      this.http.get('data/data.json').subscribe( (rsp: Info) => {
         console.log({rsp});
         this.cargada = true;
         this.info = rsp;
      });

   }

}
