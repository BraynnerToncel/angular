// src/app/services/users.service.ts
import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { Usuario } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private firestore: Firestore) {}

  addUser(user: Usuario) {
    const userRef = collection(this.firestore, 'usuarios'); 
    return addDoc(userRef, user);
  }

  getUsuarios(): Observable<Usuario[]> {
    const userRef = collection(this.firestore, 'usuarios');

    return new Observable((observer) => {
      const unsubscribe = onSnapshot(userRef, (snapshot) => {
        const usuarios: Usuario[] = [];
        snapshot.forEach((doc) => {
          usuarios.push({ id: doc.id, ...doc.data() } as Usuario);
        });
        observer.next(usuarios);
      });

      return () => unsubscribe();
    });
  }

  async updateUser(numeroDocumento: number, updatedUser: Partial<Usuario>) {
    const userRef = collection(this.firestore, 'usuarios');
    const querySnapshot = await getDocs(userRef);
  
    // Filtrar el usuario por numeroDocumento
    const userDoc = querySnapshot.docs.find(doc => {
      const userData = doc.data() as Usuario;
      return userData.numeroDocumento === numeroDocumento;
    });
  
    if (userDoc) {
      const userDocRef = doc(this.firestore, 'usuarios', userDoc.id); 
      await updateDoc(userDocRef, updatedUser);
    } else {
      throw new Error('Usuario no encontrado');
    }
  }

  deleteUser(userId: string) {
    const userRef = doc(this.firestore, 'usuarios', userId);
    return deleteDoc(userRef);
  }
}
