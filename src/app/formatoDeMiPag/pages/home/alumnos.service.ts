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
  private alumnos: Alumno[] = [];

  constructor() {}

  getAlumnos(): Observable<Alumno[]> {
    return new BehaviorSubject<Alumno[]>(this.alumnos);
  }

  agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }
}
  


