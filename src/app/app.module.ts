import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaComponent } from './media/media.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { IMCComponent } from './imc/imc.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    ApoliceComponent,
    IMCComponent,
    TemperaturaComponent,
    CalculadoraComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
