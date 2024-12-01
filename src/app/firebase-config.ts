import firebase from 'firebase/app';
import 'firebase/firestore'; // Importar Firestore
import { environment } from '../environments/environment';

export function initializeFirebase() {
  // Inicializar Firebase con la configuración que obtenemos de environment.ts
  if (!firebase.getApps().length) {
    firebase.initializeApp(environment.firebaseConfig);
  } 
  
}

