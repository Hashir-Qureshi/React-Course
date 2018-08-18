import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCsT6HWhSa_hQGp1v9v4DpmbNduvETUkGQ",
  authDomain: "expensify-37a80.firebaseapp.com",
  databaseURL: "https://expensify-37a80.firebaseio.com",
  projectId: "expensify-37a80",
  storageBucket: "expensify-37a80.appspot.com",
  messagingSenderId: "1029341741498"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database
// //   .ref("expenses")
// //   .once("value")
// //   .then(snapshot => {
// //     const expenses = [];

// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // database.ref("expenses").on("value", snapshot => {
// //   const expenses = [];

// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createdAt: 20893423847
// });

// // database.ref("notes").push({
// //   title: "Course Topics",
// //   body: "React Native, Angular, Python"
// // });

// // const firebaseNotes = {
// //   notes: {
// //     sdfasrfawrf: {
// //       title: "First note!",
// //       body: "This is my note"
// //     },
// //     wevwvewev: {
// //       title: "Another note",
// //       body: "This is my note"
// //     }
// //   }
// // }

// // const notes = [
// //   {
// //     id: 12,
// //     title: "First note!",
// //     body: "This is my note"
// //   },
// //   {
// //     id: "761ase",
// //     title: "Another note",
// //     body: "This is my note"
// //   }
// // ];

// // database.ref("notes").set(notes);

// // const onValueChange = database.ref().on(
// //   "value",
// //   snapshot => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// //   },
// //   e => {
// //     console.log("Error with data fetching", e);
// //   }
// // );

// // setTimeout(() => {
// //   database.ref("age").set(25);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref("age").set(26);
// // }, 10500);

// // database
// //   .ref("location/city")
// //   .once("value")
// //   .then(snapshot => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch(e => {
// //     console.log("Error fetching data", e);
// //   });

// // database
// //   .ref()
// //   .set({
// //     name: "Hashir Qureshi",
// //     age: 22,
// //     stressLevel: 6,
// //     job: {
// //       title: "Software Developer",
// //       company: "Google"
// //     },
// //     location: {
// //       city: "New York",
// //       country: "United States"
// //     }
// //   })
// //   .then(() => {
// //     console.log("Data is saved!");
// //   })
// //   .catch(e => {
// //     console.log("This failed", e);
// //   });

// // database.ref().set("This is my data");

// // database.ref("age").set(23);

// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "Amazon",
// //   "location/city": "Seattle"
// // });

// // database
// //   .ref("isSingle")
// //   .remove()
// //   .then(() => {
// //     console.log("Data was removed");
// //   })
// //   .catch(err => {
// //     console.log("Did not remove data");
// //   });
