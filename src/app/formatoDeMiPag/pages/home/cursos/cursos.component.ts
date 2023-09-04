import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { seleccionarCurso } from './cursos.actions';
import { Curso } from './curso.model';
import { selectAllCursos, selectCursoSeleccionado } from './curso.selector';

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
      descripcion: 'Aprende a desarrollar aplicaciones web con Angular.',
      precio: 50000, // Precio del curso
      caracteristicas: [
        'Aprende a crear diseño web',
        'Expandi tus posibilidades',
        'Aprende a desarrolar',
        'Usted tendra el certificado de desarrolador web' 
      ]
    },
    {
      id: 2,
      nombre: 'Curso de React',
      profesor: 'María Gómez',
      duracion: '2 semanas',
      materia: 'Desarrollo web',
      descripcion: 'Aprende a construir interfaces interactivas con React.',
      precio: 100000,
      caracteristicas: [
        'Aprende a crear diseño web',
        'Expandi tus posibilidades',
        'Aprende a desarrolar',
        'Usted tendra el certificado de desarrolador web' 
      ]
    },
    {
      id: 3,
      nombre: 'Curso de Vue.js',
      profesor: 'Carlos Rodríguez',
      duracion: '4 semanas',
      materia: 'Desarrollo web',
      descripcion: 'Descubre el framework Vue.js para el desarrollo web.',
      precio: 150000,
      caracteristicas: [
        'Aprende a crear diseño web',
        'Expandi tus posibilidades',
        'Aprende a desarrolar',
        'Usted tendra el certificado de desarrolador web' 
      ]
    },
  ];

  cursoSeleccionado: Curso | null = null; 

  
  constructor(private store: Store) {  this.store.select(selectAllCursos).subscribe((cursos) => {
    this.cursos = cursos;
  });

  this.store.select(selectCursoSeleccionado).subscribe((cursoSeleccionado) => {
    this.cursoSeleccionado = cursoSeleccionado;
  });}

  verDetalles(curso: any) {
    this.cursoSeleccionado = curso;
    this.store.dispatch(seleccionarCurso({ curso }));
  }
  mostrarInfoAdicional = false;
  verInfo(curso: any) {
    this.cursoSeleccionado = curso;
    this.mostrarInfoAdicional = !this.mostrarInfoAdicional; 
  }
  }
