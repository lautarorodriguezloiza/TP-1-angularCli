import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './formatoDeMiPag/pages/home/home.component';
import { CursosComponent } from './formatoDeMiPag/pages/home/cursos/cursos.component';
import { LoginComponent } from './formatoDeMiPag/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { 
    path: 'listaDeAlumnos',
    component: HomeComponent,
    loadChildren: () => import('./formatoDeMiPag/pages/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'cursos',
    component: CursosComponent,
    loadChildren: () => import('./formatoDeMiPag/pages/home/cursos/cursos.module').then(m => m.CursosModule) 
  },
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }