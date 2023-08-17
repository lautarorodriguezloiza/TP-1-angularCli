import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CursosService {
    getCursos(): Observable<string[]> {
    return of(['Curso 1', 'Curso 2', 'Curso 3']);
    }
}