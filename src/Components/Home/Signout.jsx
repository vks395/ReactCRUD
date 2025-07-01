import {  useNavigate } from 'react-router-dom';

export const Signout = () => {
//      const navigate = useNavigate();
      localStorage.clear();
      // navigate('/login'); // Navigate to the new page
   window.location.href = "/login";
return <>
<b><h2>you are logged out successfully.</h2></b>
</>
}
