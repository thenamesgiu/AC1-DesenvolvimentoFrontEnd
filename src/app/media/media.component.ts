import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  acUm : number = 0;
  acDois : number = 0;
  ag: number = 0;
  af: number = 0;
  mediaFinal : number = 0;
  situacao: string = "";


  media(){

    this.mediaFinal = (this.acUm * 0.15) + (this.acDois * 0.3) + (this.ag * 0.1) + (this.af * 0.45);

    if (this.mediaFinal < 5){
      this.situacao = "reprovado(a)";
    }
    else{
      this.situacao = "aprovado(a)";
    }
  
  }
}
