import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Info } from '../interfaces/info.interface';
import { Equipo } from '../interfaces/equipo.interface';

@Injectable({
   providedIn: 'root'
})
export class InfoPaginaService {

   public info: Info = {};
   public team: Equipo[] = [];
   public cargada: boolean = false;

   constructor(private http: HttpClient) {
      this.cargarInfo();
      this.cargarEquipo();
   }

   private cargarInfo() {

      this.http.get('data/data.json').subscribe( (info: Info) => {
         this.cargada = true;
         this.info = info;
      });
   }

   private cargarEquipo() {
      this.http.get('https://angular-template-b5d99-default-rtdb.firebaseio.com/equipo.json').subscribe( (team: any) => {
         // console.log(team);
         this.team = team;
      });
   }

}
