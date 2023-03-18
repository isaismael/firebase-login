import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function salir() {
  return auth.signOut()
  navigate('/')
}

export const Home = (props) => {
  return (
    <div>
      <div>
        <h1>
          <Link to="/Login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/Signup">Signup</Link>
        </h1>
      </div>
      <h2>{props.name ? `Bienvenido - ${props.name}` : 'Inície Sesion'}</h2>
      <button onClick={salir}>Salir</button>
    </div>
  );
};
