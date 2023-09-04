import { createReducer, on } from '@ngrx/store';
import { seleccionarCurso } from './cursos.actions';
import { CursosState } from './cursos.state';
import { Action } from '@ngrx/store';

export const initialState: CursosState = {
    cursos: [], 
    cursoSeleccionado: null,
};

const cursosReducer = createReducer(
    initialState,
    on(seleccionarCurso, (state, { curso }) => ({
        ...state,
        cursoSeleccionado: curso,
    }))
);

export function reducer(state: CursosState | undefined, action: Action) {
    return cursosReducer(state, action);
}