import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { of } from 'rxjs';

describe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;
  let mockCursosService: Partial<CursosService>;

  const mockCursosData = [
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
    }
  ];

  beforeEach(() => {
    mockCursosService = {
      getCursos: (): any => of(mockCursosData)
    };

    TestBed.configureTestingModule({
      declarations: [CursosComponent],
      providers: [{ provide: CursosService, useValue: mockCursosService }]
    });

    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creado', () => {
    expect(component).toBeTruthy();
  });

  it('get cursos', () => {
    expect(component.cursos.length).toBe(3); 
  });

  it('cursoSeleccionado', () => {
    const curso = mockCursosData[0];
    component.verDetalles(curso);
    expect(component.cursoSeleccionado).toBe(curso);
  });


});