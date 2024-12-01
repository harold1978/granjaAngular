import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private db = firebase.firestore();

  constructor() { }

  getItems(collectionName: string) {
    return this.db.collection(collectionName).get();
  }
}
