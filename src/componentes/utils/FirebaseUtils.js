//import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
//import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, getFirestore} from "@firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
      apiKey: "AIzaSyCr8HwOFe3ewR40_sEyNP-WH68Gxfc2jgg",
      authDomain: "sistema-72889.firebaseapp.com",
      projectId: "sistema-72889",
      storageBucket: "sistema-72889.appspot.com",
      messagingSenderId: "982503911176",
      appId: "1:982503911176:web:393efe1ac268ddc673c6bd",
      measurementId: "G-BL4HQLR943"
    }
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const storage = getStorage(app);

    export const db = getFirestore(app);

    // export const db_doc = doc(app);

    // export const db_setDoc = setDoc(app);

export async function firebaseBuscar(coleccionABuscar) {
    let listado = [];
    let consulta = collection(getFirestore(), coleccionABuscar);
    let resultado = await getDocs(consulta);
    resultado.forEach(documento => {
      let objeto = documento.data();
      objeto.id = documento.id;
      listado.push(objeto);
    });
    return listado;
  }

export async function uploadFile(file) {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}
