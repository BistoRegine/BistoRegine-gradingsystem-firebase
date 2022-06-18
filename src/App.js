import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCmhP7Gp4Mz9Y5y3NkrFJOzF7ZqkAxx12E",
  authDomain: "grading-system-firebase.firebaseapp.com",
  databaseURL: "https://grading-system-firebase-default-rtdb.firebaseio.com",
  projectId: "grading-system-firebase",
  storageBucket: "grading-system-firebase.appspot.com",
  messagingSenderId: "298973895290",
  appId: "1:298973895290:web:8d5c2d834994474f8a39c3",
  measurementId: "G-DBY82P3798"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return (
    <div className="App">
       <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />

       </Switch>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
