import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './formatoDeMiPag/pages/home/home.component';
import { CursosComponent } from './formatoDeMiPag/pages/home/cursos/cursos.component';

const routes: Routes = [
  { 
    path: 'listaDeAlumnos',
    component: HomeComponent },
  { 
    path: 'cursos',
  component: CursosComponent }, 

];

    @NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  export class AppRoutingModule { }
