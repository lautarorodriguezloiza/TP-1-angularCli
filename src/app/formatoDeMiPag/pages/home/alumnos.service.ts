import { Injectable } from '@angular/core';
import { Observable,  BehaviorSubject} from 'rxjs';



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

  eliminarAlumno(alumno: Alumno): void {
    const indice = this.alumnos.indexOf(alumno);
    if (indice !== -1) {
      this.alumnos.splice(indice, 1);
      this.alumnosSubject.next(this.alumnos);
    }
  }
}



