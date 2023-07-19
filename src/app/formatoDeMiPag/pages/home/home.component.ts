import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Alumno {
  nombre: string;
  apellido:string
  edad: number;
  email: string;
  asistencia: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {

  alumnoForm: FormGroup;
  alumnos: Alumno[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.alumnoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: [''],
      edad: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      const alumno: Alumno = this.alumnoForm.value;
      this.alumnos.push(alumno);
      this.alumnoForm.reset();
    }
  }
}
  

