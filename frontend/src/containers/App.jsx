import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import About from "../components/About";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Logout from "../components/Logout";
import Recognition from "../components/Recognition";
import Gestures from "../components/Gestures";
import '../assets/styles/App.scss';

const App = ()  =>{
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="wrap">
            <div className="main">
                <Routes>
                    <Route exact path="/" element={ <Main/> } />
                    <Route path="/about/" element={<About/>} />
                    <Route path="/contact/" element={<Main/>} />
                    <Route path="/login/" element={<Login/>} />
                    <Route path="/signup/" element={<Signup/>} />
                    <Route path="/logout/" element={<Logout/>} />
                    <Route path="/re/" element={<Recognition/>} />
                    <Route path="/gts/" element={<Gestures/>} />
                </Routes>
            </div>
        </div>
        <div className="footer">
            <Footer/>
        </div>  
      </Router>
    </div>
  );
}

export default App;
