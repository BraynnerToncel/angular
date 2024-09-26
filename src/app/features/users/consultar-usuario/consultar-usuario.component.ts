// src/app/features/users/consultar-usuario/consultar-usuario.component.ts
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-consultar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.scss'],
})
export class ConsultarUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['nombres', 'apellidos',  'email', 'numeroDocumento', 'area', 'salario', 'estado', 'actions'];

  constructor(private usersService: UsersService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.usersService.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  async agregarUsuario(usuario: Usuario) {
    try {
      await this.usersService.addUser(usuario);
      this.snackBar.open('Usuario agregado con éxito', 'Cerrar', { duration: 3000 });
    } catch (error) {
      this.snackBar.open('Error al agregar usuario', 'Cerrar', { duration: 3000 });
    }
  }

  async editarUsuario(usuario: Usuario) {
    const updatedUser: Partial<Usuario> = { ...usuario }; 
    try {
      await this.usersService.updateUser(usuario.numeroDocumento, updatedUser);
      this.snackBar.open('Usuario actualizado con éxito', 'Cerrar', { duration: 3000 });
    } catch (error) {
      this.snackBar.open('Error al actualizar usuario', 'Cerrar', { duration: 3000 });
    }
  }

  async eliminarUsuario(usuarioId: string) {
    if (usuarioId) {
      try {
        await this.usersService.deleteUser(usuarioId);
        this.snackBar.open('Usuario eliminado con éxito', 'Cerrar', { duration: 3000 });
      } catch (error) {
        this.snackBar.open('Error al eliminar usuario', 'Cerrar', { duration: 3000 });
      }
    } else {
      this.snackBar.open('ID de usuario no válido', 'Cerrar', { duration: 3000 });
    }
  }
}
