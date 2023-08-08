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
  formularioEnviado = false;
  alumnoForm: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
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

  onSubmit() {
    if (this.alumnoForm.invalid) {
      return;
    }
    const nuevoAlumno: Alumno = this.alumnoForm.value;
    this.alumnosService.agregarAlumno(nuevoAlumno);
    this.formularioEnviado = true;
    this.alumnoForm.reset();
  }

  borrarFormulario() {
    this.alumnoForm.reset();
    this.formularioEnviado = false;
  }

  eliminarAlumno(alumno: Alumno): void {
    this.alumnosService.eliminarAlumno(alumno);
  }
}





  

