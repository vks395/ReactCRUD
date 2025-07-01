import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS file for styling
import { Button } from 'reactstrap'; // Import Button from reactstrap
function Login() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('vicky');
    const [password, setPassword] = useState('vicky');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginClick = () => {
   
        const validUserId = 'vicky';
        const validPassword = 'vicky';

        if (userId === validUserId && password === validPassword) {
          localStorage.setItem('userId', validUserId); 
            // navigate('/mypassanger' ,{ state: { userId } }); // Navigate to the new page
             window.location.href = "/home";
        } else {
            setErrorMessage('Invalid User ID or Password');
        }
    };

 const UserIdTest = localStorage.getItem("userId");

   if (UserIdTest === null || UserIdTest === undefined)
    { 
    return (
        <div className='loginpage'>
            <h3 style={{color:'green',font:'bold'}}> Login </h3>
           
               <div >
                  <input className='loginpageInput'
                    type="text"
                    placeholder="User ID *"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
               
                <input
                className='loginpageInput'
                    type="password"
                    placeholder="Password *"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              </div>
               
                
                <Button onClick={handleLoginClick}>Login</Button>
                
            </div>
        
    );
}
else{
    return (
        <div>
            <h1>Welcome back, {UserIdTest}</h1>
            <Button onClick={() => navigate('/mypassanger')}>Go to My Passanger</Button>
        </div>
    );
}}

export default Login;