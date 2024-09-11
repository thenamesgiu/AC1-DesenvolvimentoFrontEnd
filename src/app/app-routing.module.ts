import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { IMCComponent } from './imc/imc.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { MediaComponent } from './media/media.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'media', component: MediaComponent },
  { path: 'imc', component: IMCComponent },
  { path: 'apolice', component: ApoliceComponent },
  { path: 'temperatura', component: TemperaturaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
