import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Task from './Components/Task/Task';
import Passanger from './Components/Passanger/Passanger';
import Home from './Components/Home/Home';
import Layout from './Layout';
const App = () => {
  return (
      <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/task" element={<Task />} />
                        <Route path="/passanger" element={<Passanger />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
  )
    
};

export default App;


//   <Router>
    //       <div>
    //           {/* Navbar */}
    //           <Navbar color="dark" dark expand="md">
    //               <NavbarBrand href="/">MyApp</NavbarBrand>
    //               <Nav className="me-auto" navbar>
    //                   <NavItem>
    //                       <NavLink tag={Link} to="/">Home</NavLink>
    //                   </NavItem>
    //                   <NavItem>
    //                       <NavLink tag={Link} to="/task">Task</NavLink>
    //                   </NavItem>
    //                   <NavItem>
    //                       <NavLink tag={Link} to="/passanger">Passanger</NavLink>
    //                   </NavItem>
    //               </Nav>
    //           </Navbar>

    //           {/* Routes */}
    //           <div className="container mt-4">
    //               <Routes>
    //                   <Route path="/" element={<Home />} />
    //                   <Route path="/task" element={<Task />} />
    //                   <Route path="/passanger" element={<Passanger />} />
    //               </Routes>
    //           </div>
    //       </div>
    //   </Router>
//   );