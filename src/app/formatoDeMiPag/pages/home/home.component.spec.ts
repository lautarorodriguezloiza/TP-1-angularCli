import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from './alumnos.service';
import { Observable, of } from 'rxjs';
import { render, screen, fireEvent } from '@testing-library/angular';

describe('HomeComponent', () => {
  const mockAlumnosData = [
    { nombre: 'lautaro', apellido: 'rodriguez', edad: 25, email: 'lautaro@example.com' },
    { nombre: 'antonella', apellido: 'nale', edad: 23, email: 'nale@example.com' }
  ];

  const mockAlumnosService = {
    getAlumnos: (): Observable<any[]> => of(mockAlumnosData),
    agregarAlumno: (alumno: any) => {},
    eliminarAlumno: (alumno: any) => {}
  };

  it('agregar alumno', async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: AlumnosService, useValue: mockAlumnosService }]
    }).compileComponents();

    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

  
    const nombreInput = screen.getByLabelText('Nombre');
    const apellidoInput = screen.getByLabelText('Apellido');
    const edadInput = screen.getByLabelText('Edad');
    const emailInput = screen.getByLabelText('Email');
    const submitButton = screen.getByText('Login');

    // Llenar el formulario
    fireEvent.input(nombreInput, { target: { value: 'Test' } });
    fireEvent.input(apellidoInput, { target: { value: 'User' } });
    fireEvent.input(edadInput, { target: { value: '30' } });
    fireEvent.input(emailInput, { target: { value: 'test@example.com' } });

    fireEvent.click(submitButton);

    const alumnosService = TestBed.inject(AlumnosService);
    expect(alumnosService.agregarAlumno).toHaveBeenCalledWith({
      nombre: 'Test',
      apellido: 'User',
      edad: 30,
      email: 'test@example.com'
    });
  });


});