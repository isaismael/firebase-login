import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { Signup } from "../components/Signup/Signup";
import { auth } from "../firebase";

export const MyRoutes = () => {

  const [userName, setUserName] = useState([])

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName)
      } else setUserName('')
    })
  }, []);

  return (
    <Router>
        <Routes>
            <Route excat path="/" element={<Home name={userName} />}/>
            <Route excat path="/Login" element={<Login/>}/>
            <Route excat path="/Signup" element={<Signup/>}/>
        </Routes>
    </Router>
  )
}
