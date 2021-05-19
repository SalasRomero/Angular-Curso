import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { 
    console.log('Soy el constructor');
  }

  ngOnInit(): void {
    console.log('Soy el metodo onInit');
  }

  heroes: string[] = ['Gokú','Vegetta','Gohan','Piccolo','Trunks'];
  //heroesBorrados: string[] =[];
  heroeBorrado: string = '';
  Borrar():void
  {
     this.heroeBorrado = this.heroes.shift() || '';
  }

}
