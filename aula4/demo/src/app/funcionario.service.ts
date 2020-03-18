import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  getFuncionarios(){
    return[
      {"id":1, "nome":"Eduardo", "idade":41},
      {"id":2, "nome":"Monica", "idade":36},
      {"id":3, "nome":"Rafael", "idade":55},
      {"id":4, "nome":"Vivian", "idade":22},
      {"id":5, "nome":"Clara", "idade":29},
    ]
  }
}
