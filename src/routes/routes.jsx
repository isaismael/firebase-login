import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { Signup } from "../components/Signup/Signup";

export const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route excat path="/" element={<Home/>}/>
            <Route excat path="/Login" element={<Login/>}/>
            <Route excat path="/Signup" element={<Signup/>}/>
        </Routes>
    </Router>
  )
}
