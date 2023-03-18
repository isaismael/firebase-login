import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { InputControl } from "../InputControl/InputControl";

import styles from "./Signup.module.css";

export const Signup = () => {
  const navigate = useNavigate();
  //
  const [values, setValues] = useState({ name: "", email: "", pass: "" });
  //
  const [errorMsg, setErrorMsg] = useState([]);
  //
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  //
  const registro = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Registro</h1>
        <InputControl
          label="Nombre"
          placeholder="Ingrese un nombre"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              name: event.target.value,
            }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Ingrese un Correo"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Constraseña"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              pass: event.target.value,
            }))
          }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={registro} disabled={submitButtonDisabled}>
            Registrar
          </button>
          <p>
            Si ta tienes una cuenta ve a 
            <span>
              <Link to='/Login'> Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
