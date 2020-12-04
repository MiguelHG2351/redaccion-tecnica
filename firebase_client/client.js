import firebase from "firebase/app";
// import firebase_storage from 'firebase'
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD677K3F-nENqrpYyVi3DtqiVX_yYM6TNk",
  authDomain: "redaccion-tecnica-f79d8.firebaseapp.com",
  databaseURL: "https://redaccion-tecnica-f79d8.firebaseio.com",
  projectId: "redaccion-tecnica-f79d8",
  storageBucket: "redaccion-tecnica-f79d8.appspot.com",
  messagingSenderId: "1013146006342",
  appId: "1:1013146006342:web:565006e80b234796da6b47",
  measurementId: "G-5DCGY87FJZ"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

function getData() {
  const getStorage = firebase.storage();
  const refStorage = getStorage.ref();
  
  let tempData = {
  
  }


  let carrera = "agricola";
  let video = "Cultivo del cacao.mp4";
  // const data = getStorage.refFromURL(`gs://redaccion-tecnica-f79d8.appspot.com/videos/${carrera}/${video}`)
  refStorage
    .child(`videos/${carrera}/${video}`)
    .getDownloadURL()
    .then(function (url) {
      tempData.data = url;
    });

    return tempData

}

export default getData; 
 