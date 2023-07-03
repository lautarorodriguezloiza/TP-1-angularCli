import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';
  faltanAlumnos=true; 
  fecha: Date = new Date();


  onInputChange(event: KeyboardEvent): void{
    const htmlImput = event.target as HTMLInputElement;
    console.log(htmlImput.value)
  }
    }

