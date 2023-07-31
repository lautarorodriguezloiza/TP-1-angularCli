import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos: any[] = [
    {
      id: 1,
      nombre: 'Curso de Angular',
      profesor: 'Juan Pérez',
      duracion: '3 semanas',
      materia: 'Desarrollo web',
      descripcion: 'Aprende a desarrollar aplicaciones web con Angular.'
    },
    {
      id: 2,
      nombre: 'Curso de React',
      profesor: 'María Gómez',
      duracion: '2 semanas',
      materia: 'Desarrollo web',
      descripcion: 'Aprende a construir interfaces interactivas con React.'
    },
    {
      id: 3,
      nombre: 'Curso de Vue.js',
      profesor: 'Carlos Rodríguez',
      duracion: '4 semanas',
      materia: 'Desarrollo web',
      descripcion: 'Descubre el framework Vue.js para el desarrollo web.'
    },
  ];

  cursoSeleccionado: any | null = null;

  verDetalles(curso: any) {
    this.cursoSeleccionado = curso;
  }
}