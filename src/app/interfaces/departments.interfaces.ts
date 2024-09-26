export interface Departamento {
  id?: string; 
  codigo: number; 
  nombre: string; 
  lider: number; 
  estado: 'activo' | 'inactivo'; 
}
