import { Injectable } from '@angular/core';
import { Observable, of , BehaviorSubject} from 'rxjs';



export interface Alumno {
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnosSubject: BehaviorSubject<Alumno[]> = new BehaviorSubject<Alumno[]>([]);
  private alumnos: Alumno[] = [];

  constructor() {}

  getAlumnos(): Observable<Alumno[]> {
    return this.alumnosSubject.asObservable();
  }

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
    this.alumnosSubject.next(this.alumnos.slice());
  }


}


