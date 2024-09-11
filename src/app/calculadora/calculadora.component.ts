import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num : number = 0;
  numb : number = 0;
  result: number = 0;
  oper: string = "";
  erro: string = "";

  calculadora(){

    switch(this.oper){
      case "+": 
        this.result = this.num + this.numb;
        this.erro = "";
        break;
      case "-":
        this.result = this.num - this.numb;
        this.erro = "";
        break;
      case "*":
        this.result = this.num * this.numb;
        this.erro = "";
        break;
      case "/":
        this.result = this.num / this.numb;
        this.erro = "";
        break;
      default:
        this.erro = "Operação inexistente";
        break;
    }
    
  }
}
