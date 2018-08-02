import { initializeApp } from 'firebase';

const app = initializeApp({
	apiKey: "AIzaSyDjrRVFAYzr7F0VVf0iJ5jru-e2tuykRGU",
    authDomain: "fir-vue-c465c.firebaseapp.com",
    databaseURL: "https://fir-vue-c465c.firebaseio.com",
    projectId: "fir-vue-c465c",
    storageBucket: "fir-vue-c465c.appspot.com",
    messagingSenderId: "876994316444"
})

export const db = app.database();
export const namesRef = db.ref('names');
export const cpxbook = db.ref('register');

export const stg = app.storage();
// export const photosProfile = stg.storage();