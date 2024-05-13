import firebase from "firebase/app";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: "GZkHzpVWc6kzeOfZatKGDn2s53e39Bd8hBRxQ0eY",
  databaseURL: "https://chatroom-3a0db-default-rtdb.firebaseio.com",
  authDomain: "chatroom-3a0db.firebaseapp.com",
});

const database = firebase.database();
const rtdb = app.database();

const rootEl = document.querySelector(".root");

const chatroomsRef = database.ref("/chatrooms");
chatroomsRef.on("value", (snap) => {
  const value = snap.val();
  console.log(snap, value);
  if (rootEl) {
    rootEl.innerHTML = JSON.stringify(value);
  }
});

export { rtdb };

/*import  initializeApp  from "firebase/app";
import  getDatabase,  {ref, Database, onValue}   from "firebase/database";

const firebaseConfig = {
  apiKey: "GZkHzpVWc6kzeOfZatKGDn2s53e39Bd8hBRxQ0eY",
  databaseURL: "https://chatroom-3a0db-default-rtdb.firebaseio.com",
  authDomain: "chatroom-3a0db.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const rtdb = getDatabase(app);

const chatroomsRef = ref(rtdb, "/chatrooms/");
onValue(chatroomsRef, (snap) => {
  const value = snap.val();
  console.log(value);
});

export { rtdb };*/
