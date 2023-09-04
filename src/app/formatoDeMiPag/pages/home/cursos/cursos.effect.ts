// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Store } from '@ngrx/store';
// import { of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import * as fromCursosActions from './cursos.actions'; 
// import { CursosService } from './cursos.service'; 


// @Injectable()
// export class CursosEffects {

//     constructor(
//         private actions$: Actions,
//         private store: Store,
//         private cursosService: CursosService
//     ) {}
//     seleccionarCurso$ = createEffect(() =>
//       this.actions$.pipe(
//         ofType(fromCursosActions.seleccionarCurso), 
//         mergeMap((action) =>
        
//           this.cursosService.getCurso(action.curso.id).pipe(
//             map((curso) => {
             
//               return fromCursosActions.seleccionarCursoSuccess({ curso });
//             }),
//             catchError((error) => of(fromCursosActions.seleccionarCursoFailure({ error })))
//           )
//         )
//       )
//     );
  
 
//   }