import { createAction, props } from '@ngrx/store';
import { Curso } from './curso.model';

export const cargarCursosExitoso = createAction(
    '[Cursos] Cargar Cursos Exitoso',
    props<{ cursos: Curso[] }>()
);

export const seleccionarCurso = createAction(
  '[Cursos] Seleccionar Curso',
  props<{ curso: Curso }>()
);
