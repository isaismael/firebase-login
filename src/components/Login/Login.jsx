import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <div className={styles.footer}>
          <b className={styles.error}>Error</b>
          <button>Login BTN</button>
          <p>Crear Cuenta
            <span><Link to='/Signup'> - ir</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};
