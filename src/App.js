
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./Layout/header/Header";

function App() {
  return (
    <>
        <ToastContainer/>
        <Header/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>

    </>
  );
}

export default App;
