import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, updateDoc } from '@angular/fire/firestore';
import { Departamento } from 'src/app/interfaces/departments.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  constructor(private firestore: Firestore) {}

  // Método para agregar un nuevo departamento
  addDepartamento(departamento: Departamento) {
    const departmentRef = collection(this.firestore, 'departamentos'); 
    return addDoc(departmentRef, departamento);
  }

  // Método para obtener la lista de departamentos
  async getDepartments(): Promise<Departamento[]> {
    const departmentRef = collection(this.firestore, 'departamentos');
    const snapshot = await getDocs(departmentRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Departamento));
  }

  // Método para actualizar un departamento
  updateDepartment(codigo: string, updatedDepartamento: Partial<Departamento>) {
    const departmentRef = doc(this.firestore, 'departamentos', codigo);
    return updateDoc(departmentRef, updatedDepartamento);
  }

  // Método para eliminar un departamento
  deleteDepartment(codigo: string) {
    const departmentRef = doc(this.firestore, 'departamentos', codigo);
    return deleteDoc(departmentRef);
  }
}
