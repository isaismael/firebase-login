import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";

export const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route excat path="/" element={<Home/>}/>
            <Route excat path="/Login" element={<Login/>}/>
        </Routes>
    </Router>
  )
}
