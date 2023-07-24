import { Component ,OnInit, OnDestroy  } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService} from './alumnos.service';
import { Observable,  Subscription } from 'rxjs';

interface Alumno {
  nombre: string;
  apellido:string
  edad: number;
  email: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit, OnDestroy {
  alumnoForm: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: [''],
    edad: [null, Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  alumnos$!: Observable<Alumno[]>;
  private alumnosSubscription: Subscription | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private alumnosService: AlumnosService
  ) {}

  ngOnInit() {
    this.alumnos$ = this.alumnosService.getAlumnos();
    this.alumnosSubscription = this.alumnos$.subscribe();
  }
  
  ngOnDestroy() {
    if (this.alumnosSubscription) {
      this.alumnosSubscription.unsubscribe();
    }
  }
  borrarFormulario() {
    this.alumnoForm.reset();
  }

  onSubmit() {

    const newAlumno: Alumno = {
      nombre: this.alumnoForm.value.nombre,
      apellido: this.alumnoForm.value.apellido,
      edad: this.alumnoForm.value.edad,
      email: this.alumnoForm.value.email
    };
    this.alumnosService.agregarAlumno(newAlumno);

    this.alumnoForm.reset();
  }
}






  

