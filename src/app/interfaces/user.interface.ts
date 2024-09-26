// src/app/interfaces/user.interface.ts
export interface Usuario {
  id?: string; // Haz el ID opcional
  nombres: string;                
  apellidos: string;              
  fechaNacimiento: Date;         
  email: string;                 
  numeroDocumento: number;       
  area: string;                  
  salario: number;               
  estado: 'activo' | 'inactivo';  
}
