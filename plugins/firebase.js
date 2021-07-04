import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDrhBzpkiCw33zUfcSegH7I5KRBg0M1wrc",
      authDomain: "fir-pj-256ef.firebaseapp.com",
      projectId: "fir-pj-256ef",
      storageBucket: "fir-pj-256ef.appspot.com",
      messagingSenderId: "237827625816",
      appId: "1:237827625816:web:60c8f1b1f96ec92dec4b2d",
      measurementId: "G-KYCMFH261W"
    }
  )
}

export default firebase