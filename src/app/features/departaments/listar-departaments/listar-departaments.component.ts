import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { Departamento } from 'src/app/interfaces/departments.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-departaments',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './listar-departaments.component.html',
  styleUrls: ['./listar-departaments.component.scss'],
})
export class ListarDepartamentsComponent implements OnInit {
  departamentos: Departamento[] = [];
  displayedColumns: string[] = ['codigo', 'nombre', 'lider', 'estado', 'actions'];

  constructor(private departmentsService: DepartmentsService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentsService.getDepartments().then((departamentos) => {
      this.departamentos = departamentos;
    }).catch(error => {
      this.snackBar.open('Error al cargar departamentos', 'Cerrar', { duration: 3000 });
    });
  }

  async editarDepartamento(departamento: Departamento) {
    const updatedDepartment: Partial<Departamento> = { ...departamento }; // Aquí puedes modificar el departamento como desees
    try {
      await this.departmentsService.updateDepartment(departamento.id || '', updatedDepartment);
      this.snackBar.open('Departamento actualizado con éxito', 'Cerrar', { duration: 3000 });
      this.loadDepartments(); // Volver a cargar la lista de departamentos
    } catch (error) {
      this.snackBar.open('Error al actualizar departamento', 'Cerrar', { duration: 3000 });
    }
  }

  async eliminarDepartamento(departmentId: string) {
    if (departmentId) {
      try {
        await this.departmentsService.deleteDepartment(departmentId);
        this.snackBar.open('Departamento eliminado con éxito', 'Cerrar', { duration: 3000 });
        this.loadDepartments(); // Volver a cargar la lista de departamentos
      } catch (error) {
        this.snackBar.open('Error al eliminar departamento', 'Cerrar', { duration: 3000 });
      }
    } else {
      this.snackBar.open('ID de departamento no válido', 'Cerrar', { duration: 3000 });
    }
  }
}
