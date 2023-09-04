// import { Action, createReducer, on } from '@ngrx/store';
// import * as alumnosActions from './alumnos.actions';
// import { Alumno } from '../alumnos.model';

// export interface AlumnoState {
//   alumnos: Alumno[]; // Suponiendo que Alumno es una interfaz que representa a un alumno
// }

// export const initialState: AlumnoState = {
//     alumnos: [],
// };

// const _alumnosReducer = createReducer(
//     initialState,
//     on(alumnosActions.agregarAlumno, (state, { alumno }) => {
//     return {
//         ...state,
//         alumnos: [...state.alumnos, alumno],
//     };
//     }),
//     on(alumnosActions.eliminarAlumno, (state, { alumno }) => {
//     return {
//         ...state,
//         alumnos: state.alumnos.filter((a) => a !== alumno),
//     };
//     })
// );

// export function alumnosReducer(state: AlumnoState | undefined, action: Action) {
//     return _alumnosReducer(state, action);
// }