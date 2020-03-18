import { Component } from '@angular/core';
import { Carro } from './carro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'demo';
  //carro : string = "bmw";
  //carro : number = 123;
  //carro : boolean = false;

  carros = [
    new Carro(1,'bmw'),
    new Carro(2,'Audi')
  ]

  olaMundo(){
    return "Olá Mundo"!!!;
  }

  retornoMetodo(){
    console.log('Testando retorno de método');
  }


}
