// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { of } from 'rxjs';
// import * as alumnosActions from './alumnos.actions';
// import { AlumnosService } from './alumnos.service';

// @Injectable()
// export class AlumnosEffects {
//     constructor(private actions$: Actions, private alumnosService: AlumnosService) {}

//     agregarAlumno$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(alumnosActions.agregarAlumno),
//             mergeMap(({ alumno }) =>
//                 this.alumnosService.agregarAlumno(alumno).pipe(
//                     map(() => alumnosActions.agregarAlumnoSuccess()),
//                     catchError((error) => of(alumnosActions.agregarAlumnoFailure({ error })))
//                 )
//             )
//         )
//     );
// }