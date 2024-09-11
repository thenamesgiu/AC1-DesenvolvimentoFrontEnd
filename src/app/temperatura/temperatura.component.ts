import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {
  temp : number = 0;
  resultF: number = 0;
  resultK: number = 0;

  conversorTemperatura(){

    this.resultF = (this.temp * (9/5)) + 32;
    this.resultK = this.temp + 273.15;
    
    
  }
}
