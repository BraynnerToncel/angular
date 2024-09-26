import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Usuario } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent {
  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService, // Inyectar el servicio
    private snackBar: MatSnackBar
  ) {
    this.usuarioForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.maxLength(50)]],
      apellidos: ['', [Validators.required, Validators.maxLength(50)]],
      fechaNacimiento: ['', [Validators.required, this.fechaNacimientoValidator.bind(this)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      numeroDocumento: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      area: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(21)]],
      salario: ['', [Validators.required, Validators.pattern(/^\d{1,8}(\.\d{1,2})?$/)]],
      estado: ['activo', Validators.required]
    });
  }

  // Validador personalizado para la fecha de nacimiento
  fechaNacimientoValidator(control: any) {
    const fechaNacimiento = new Date(control.value);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Establecer horas a 00:00:00 para comparación

    return fechaNacimiento <= hoy ? null : { fechaInvalida: true }; // Retorna null si es válida, o un objeto de error si no
  }

  async onSubmit() {
    if (this.usuarioForm.valid) {
      const usuarioData: Usuario = this.usuarioForm.value; // Usar la interfaz Usuario
      try {
        await this.usersService.addUser(usuarioData); // Llamar al servicio
        this.snackBar.open('Usuario creado exitosamente', 'Cerrar', {
          duration: 3000,
        });
        this.usuarioForm.reset(); // Reiniciar el formulario después de guardar
      } catch (error) {
        this.snackBar.open('Error al crear el usuario', 'Cerrar', {
          duration: 3000,
        });
        console.error('Error al crear el usuario:', error);
      }
    } else {
      this.snackBar.open('Por favor, completa todos los campos correctamente', 'Cerrar', {
        duration: 3000,
      });
    }
  }
}
