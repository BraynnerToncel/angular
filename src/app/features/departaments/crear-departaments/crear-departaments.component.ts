import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { Departamento } from 'src/app/interfaces/departments.interfaces';

@Component({
  selector: 'app-crear-departaments',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './crear-departaments.component.html',
  styleUrls: ['./crear-departaments.component.scss']
})
export class CrearDepartamentsComponent {
  departamentoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private departmentsService: DepartmentsService,
    private snackBar: MatSnackBar
  ) {
    this.departamentoForm = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      lider: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
      estado: ['activo', Validators.required] 
    });
  }

  async onSubmit() {
    if (this.departamentoForm.valid) {
      const departamentoData: Departamento = this.departamentoForm.value;
      try {
        await this.departmentsService.addDepartamento(departamentoData);
        this.snackBar.open('Departamento creado exitosamente', 'Cerrar', {
          duration: 3000,
        });
        this.departamentoForm.reset();
      } catch (error) {
        this.snackBar.open('Error al crear el departamento', 'Cerrar', {
          duration: 3000,
        });
        console.error('Error al crear el departamento:', error);
      }
    } else {
      this.snackBar.open('Por favor, completa todos los campos correctamente', 'Cerrar', {
        duration: 3000,
      });
    }
  }
}
