import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {InputControl} from '../InputControl/InputControl'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";


import styles from "./Login.module.css";
import { async } from "@firebase/util";

export const Login = () => {
  
  const navigate = useNavigate();

  const [values, setValues] = useState({email: '', password: ''});

  const [errorMsg, setErrorMsg] = useState([]);

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const Loguearse = () =>{
    if(!values.email || !values.password){
      setErrorMsg('Datos invalidos!')
      return
    }
    setErrorMsg('');
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then(async(res) => {
      setSubmitButtonDisabled(false);
      navigate('/');
    })
    .catch((err) => {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.messsage);
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl 
        label='Email'
        onChange={(event) => setValues((prev) => ({...prev,email:event.target.value}))}
        placeholder='Ingrese su correo'
        />
        <InputControl 
        label='Contraseña'
        onChange={(event) => setValues((prev) => ({...prev,password:event.target.value}))}
        placeholder='Ingrese su contraseña'
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={Loguearse} disabled={submitButtonDisabled}>Login</button>
          <p>Crear Cuenta
            <span><Link to='/Signup'> - ir</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};
