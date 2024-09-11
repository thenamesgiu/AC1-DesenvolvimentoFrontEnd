import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {
  valorApolice : number = 0;
  valor: number = 0;
  idade: number = 0;
  nomeSeg: string = "";
  sexo : string = "";


  apolice(){
    if (this.sexo == "M" && this.idade <= 25){
      this.valorApolice = this.valor * 0.15;
    }
    else if (this.sexo == "M" && this.idade > 25){
      this.valorApolice = this.valor * 0.1;
    }
    else if (this.sexo == "F"){
      this.valorApolice = this.valor * 0.08;
    }
  }
}
