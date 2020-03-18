import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nome = 'RaFaeL bAeNa';
  public nome2 = "EsTE É o NOmE 2"
  public nomes = {'id':1, 'nome':'rafael', 'sobrenome':'baena'}
  public data = new Date();
}
