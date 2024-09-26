import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { Router } from '@angular/router'; 

const MATERIAL_MODULES = [MatIconModule, MatToolbarModule, MatButtonModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MATERIAL_MODULES], // Agrega CommonModule aquí
  template: `
    <mat-toolbar color="primary">
      <span class="spacer"></span>
      <a mat-button (click)="onNavigateTo('home')">
        <mat-icon>home</mat-icon>
        <span>Home</span>       
      </a>
      
      <a mat-button (click)="onNavigateTo('users')">
        <mat-icon>person</mat-icon>
        <span>Users</span>  
      </a>

      <a mat-button (click)="onNavigateTo('departments')"> 
        <mat-icon>groups</mat-icon>
        <span>Departments</span>       
      </a>
    </mat-toolbar>
  `,
  styles: ``
})
export class ToolbarComponent {
  @Output() onUserEvent = new EventEmitter<void>(); // Emite un evento al hacer clic
  private currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url; // Guarda la ruta actual
  }

  emitClick(): void {
    this.onUserEvent.emit();
  }

  // Navegación programática
  onNavigateTo(route: string): void {
    this.router.navigate([`/${route}`]); // Navegar a la ruta seleccionada
    this.currentRoute = `/${route}`; // Actualiza la ruta actual
    this.emitClick(); // Emitir el evento después de la navegación
  }

  isUserPage(): boolean {
    return this.currentRoute === '/users'; // Comprueba si la ruta actual es 'users'
  }


}
