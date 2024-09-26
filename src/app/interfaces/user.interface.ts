export interface Usuario {
  id?: string; 
  nombres: string;                
  apellidos: string;              
  fechaNacimiento: Date;         
  email: string;                 
  numeroDocumento: number;       
  area: string;                  
  salario: number;               
  estado: 'activo' | 'inactivo';  
}
