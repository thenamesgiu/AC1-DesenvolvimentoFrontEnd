import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class IMCComponent {
  imcValor : number = 0;
  imcValorA : number = 0;
  altura: number = 0;
  peso: number = 0;
  imcClass: string = "";


  imc(){

    this.imcValor = this.peso /(Math.pow(this.altura,2));


    if (this.imcValor < 18.5){
      this.imcClass = "Abaixo do peso";
    }
    else if(this.imcValor <= 24.9){
      this.imcClass = "Peso normal";
    }
    else if (this.imcValor <= 29.9){
      this.imcClass = "Sobrepeso";
    }
    else if (this.imcValor <= 34.9){
      this.imcClass = "Obesidade grau I";
    }
    else if (this.imcValor <= 39.9){
      this.imcClass = "Obesidade grau II";
    }
    else{
      this.imcClass = "Obesidade grau III";
    }
  }
}
