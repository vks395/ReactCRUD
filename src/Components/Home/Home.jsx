import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styling
import { Button } from 'reactstrap'; // Import Button from reactstrap
import { useContext } from 'react';
import { AuthContext, } from '../../AuthContext'; // Import your context
import { HomeDash,GetGraph } from './HomeDash.tsx';
function Home() {
const navigate = useNavigate();
 const { userRole } = useContext(AuthContext);
console.log("User role:", userRole);

const UserIdTest = localStorage.getItem("userId");
    return (
        <div>
            <h3 className='title'>Welcome, {UserIdTest}</h3>
            <div>
              {userRole}<GetGraph></GetGraph>
                <p>Welcome to the home page! You can navigate to different sections from here.</p>
            </div>
            <HomeDash/> 
            <Button onClick={() => navigate('/mypassanger')}>Go to My Passanger</Button>
        </div>
    );

}
 
export default Home;