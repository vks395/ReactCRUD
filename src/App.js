import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Task from './Components/Task/Task';
import Home from './Components/Home/Home';
import Layout from './Layout';
import { Signout } from './Components/Home/Signout';
import TaskWrapper from './Components/Task/TaskWrapper';
import Login from './Components/Login/Login';
import { NotFound } from './Components/Login/NotFound';
import { AuthProvider  } from './AuthContext';


const UserIdTest = localStorage.getItem("userId");
console.log("User localStorage:", UserIdTest);
const App = () => {
    if (localStorage.length === 0 || UserIdTest === null || UserIdTest === undefined) {
        return (
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Login />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="*" />
                        </Route>
                    </Routes>
                </Router>
            </>
        )

    }
    else {

        return (
          
            <>
             <AuthProvider >
                
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/" element={<Home />} />
                             <Route path="/login" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/task" element={<Task />} />
                            <Route path="/mypassanger" element={<TaskWrapper />} />
                            <Route path="/logout" element={<Signout />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </Router>
            </AuthProvider >
            </>
        )
    };
}



export default App;