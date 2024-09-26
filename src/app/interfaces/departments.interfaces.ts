export interface Departamento {
  id?: string; // ID opcional
  codigo: number; // Longitud 2
  nombre: string; // Longitud 50
  lider: number; // Longitud 7
  estado: 'activo' | 'inactivo'; // Estado por defecto activo
}
