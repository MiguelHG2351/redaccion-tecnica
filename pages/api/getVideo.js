import * as firebase from 'firebase/app'


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

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

// api = {
//     agricola: [
//         {
//             title: "Abonos organicos",
//             url: 'https://firebasestorage.googleapis.com/v0/b/redaccion-tecnica-f79d8.appspot.com/o/videos%2Fagricola%2FAbonos%20organicos.mp4?alt=media&token=5405a90c-2cb0-4775-9b28-33ca41b473c8'
//         },
//         {
//             title: "Cultivo del cacao",
//             url: 'https://firebasestorage.googleapis.com/v0/b/redaccion-tecnica-f79d8.appspot.com/o/videos%2Fagricola%2FCultivo%20del%20cacao.mp4?alt=media&token=7b9a7c2e-0209-4a79-b7c9-b6fa551ac695'
//         },
        
//     ],
//     computacion: [

//     ],
//     civil: [

//     ]
// }

export default (req, res) => {
    // let { carrera, video } = req
    let carrera = 'agricola'
    let video = 'Cultivo del cacao.mp4'
    const fileReference = storage.refFromURL(`gs://redaccion-tecnica-f79d8.appspot.com/videos/${carrera}/${video}`)

    res.json({
        title: fileReference
    })
}