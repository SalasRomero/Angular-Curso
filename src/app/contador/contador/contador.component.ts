import {Component} from "@angular/core";

@Component({
    selector: "app-componente",
    template: `
        <h1>{{title}}</h1>
        <h1>La base es de: {{base}}</h1>
        <button (click) ="acumular(+base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click) ="acumular(-base)">-{{base}}</button>
    `
})
export class ContadorComponente
{

    title: string = 'componente';
    numero: number = 10;
    base: number = 5;
  
    acumular(valor: number):void
    {
      this.numero += valor;
    }
}