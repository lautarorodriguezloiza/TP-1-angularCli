import { TestBed } from '@angular/core/testing';
import { AlumnosService, Alumno } from './alumnos.service';
import { BehaviorSubject } from 'rxjs';

describe('AlumnosService', () => {
    let service: AlumnosService;

    beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosService);
    });

    it('deberia ser creado', () => {
    expect(service).toBeTruthy();
    });

    it('obsevable', (done) => {
    const expectedAlumnos: Alumno[] = [
        { nombre: 'lautaro', apellido: 'rodriguez', edad: 25, email: 'lautaro@example.com' },
        { nombre: 'antonella', apellido: 'nale', edad: 23, email: 'nale@example.com' }
    ];

    const alumnosSubject = new BehaviorSubject<Alumno[]>([]);
    spyOn(alumnosSubject, 'asObservable').and.returnValue(expectedAlumnos);

    spyOn(service, 'getAlumnos').and.returnValue(alumnosSubject.asObservable());

    service.getAlumnos().subscribe((alumnos) => {
        expect(alumnos).toEqual(expectedAlumnos);
        done();
    });
    });

    it('agregar alumno', () => {
    const newAlumno: Alumno = { nombre: 'Test', apellido: 'User', edad: 30, email: 'test@example.com' };
    service.agregarAlumno(newAlumno);
    expect(service['alumnos']).toContain(newAlumno);
    });

    it('remover alumno existente', () => {
    const existingAlumno: Alumno = { nombre: 'Lautaro', apellido: 'Rodriguez', edad: 25, email: 'lautaro@example.com' };
    service['alumnos'] = [existingAlumno];

    service.eliminarAlumno(existingAlumno);
    expect(service['alumnos']).toEqual([]);
    });

    it('no remover', () => {
    const existingAlumno: Alumno = { nombre: 'Lautaro', apellido: 'Rodriguez', edad: 25, email: 'lautaro@example.com' };
    const otherAlumno: Alumno = { nombre: 'antonella', apellido: 'nale', edad: 23, email: 'nale@example.com' };
    service['alumnos'] = [existingAlumno];

    service.eliminarAlumno(otherAlumno);
    expect(service['alumnos']).toEqual([existingAlumno]);
    });
});