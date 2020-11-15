import React, { useContext, useState } from 'react';

import firebase from 'firebase';
import "firebase/auth";
import firebaseConfig from './firebaseconfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../images/google.png';
import fb from '../../images/fbIcon.png';
import "./Login.css"
import Navbar from '../Navbar/Navbar';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    error: '',
    success:false
  })

  const provider = new firebase.auth.GoogleAuthProvider();
  const fbprovider = new firebase.auth.FacebookAuthProvider();
  const history = useHistory();
  const location= useLocation();
  const { from } = location.state || { from: { pathname: "/booking" } };

  if(firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig);
  }

////////////// google auth start///////////////

  const googlesignin = () => {
    firebase.auth().signInWithPopup(provider)
    .then(result => {
      var token = result.credential.accessToken;
      var {displayName,email} = result.user;
      const signuser ={name:displayName,email}
    //   setloguser(signuser)
      history.replace(from);
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

/////////////fb auth start//////////////////////
  const fblogin = () => {
    firebase.auth().signInWithPopup(fbprovider)
    .then(function(result) {
      var token = result.credential.accessToken;
      var {displayName,email} = result.user;
      const signuser ={name:displayName,email}
      history.replace(from);
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

////////////////////email auth start////////////////
  const handleChange=(e)=>{
    let isFormValid ;
    if(e.target.name==='email'){
      isFormValid = /\S+@\S+\.\S/.test(e.target.value)
    }
    if(e.target.name==='password'){
      isFormValid =e.target.value.length > 6;
    }
    if (isFormValid){
      const newuser ={...user};
      newuser[e.target.name]=e.target.value;
  //   setuser(newuser);
    }
  }

  const haldlesubmit =(e)=>{
    if( user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email,user.password)
      .then(res =>{
        const newuser ={...user}      
        //   setuser(newuser);
        //   setloguser(newuser);
        history.replace(from);     
      })
      .catch(function(error) {
        const newuser ={...user}
        newuser.error=error.message;
        // setuser(newuser);
        var errorCode = error.code;
        var errorMessage = error.message;
      });  
    }
   
    e.preventDefault();
  }

  return (
      <section id="login">
        <Navbar />
        <form className="form1 mt-5" onSubmit={haldlesubmit}>
        {/* <h5 style={{color:'red' }}>{user.error}</h5> */}
          <h3 className="mb-4"><b>Login</b></h3>
          <div className="form-group">
            <input type="email" onBlur={handleChange} className="form-control"name="email" aria-describedby="emailHelp" placeholder="Your Email" required/>
          </div>
          <div className="form-group">
            <input type="password" onBlur={handleChange} className="form-control" name="password" placeholder="Your Password" required/>
          </div>
          <input type="submit" className="btn btn-block login" value="Login" />

          <small className="text">Don't have an account ? <Link to="/create">Create an account</Link></small>
          <div className="text-center my-4">
            <h6><b>Or</b></h6>
          </div>

          <button  onClick={fblogin}  type="button" className="btn rounded-pill btn-block">
            <img src={fb} alt="" width="30px" className="mb-1 mr-2" /> Continue With Facebook
          </button>
          <button  onClick={googlesignin} type="button" className="btn rounded-pill btn-block">
            <img src={google} alt="" width="30px" className="mb-1 mr-2" /> Continue With Google
          </button>
        </form>
      </section>
  )
}

export default Login;