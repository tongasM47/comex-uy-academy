import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore'

// La configuración web de Firebase no es secreta: identifica el proyecto.
// La seguridad la dan las reglas de Firestore (cada usuario solo lee y escribe
// users/{suUid}) y los dominios autorizados de Authentication.
const firebaseConfig = {
  apiKey: 'AIzaSyDtPwC82JXrrDpjr-dgy7FYmcO5hVGrBxc',
  authDomain: 'comex-uy-academy.firebaseapp.com',
  projectId: 'comex-uy-academy',
  storageBucket: 'comex-uy-academy.firebasestorage.app',
  messagingSenderId: '233112634639',
  appId: '1:233112634639:web:53c9027e423a998c6a2a7a',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

// Caché local persistente: el progreso se puede leer y guardar sin conexión
// y se sincroniza solo cuando vuelve la red.
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
})
