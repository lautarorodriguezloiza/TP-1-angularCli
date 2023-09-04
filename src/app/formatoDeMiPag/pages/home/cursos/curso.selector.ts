
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CursosState } from './cursos.state';

// Selector para obtener el estado de cursos
export const selectCursosState = createFeatureSelector<CursosState>('cursos');

// Selector para obtener todos los cursos
export const selectAllCursos = createSelector(
    selectCursosState,
    (state) => state.cursos
);

// Selector para obtener el curso seleccionado
export const selectCursoSeleccionado = createSelector(
   selectCursosState,
    (state) => state.cursoSeleccionado
);