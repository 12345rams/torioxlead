import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import './login.css'
import { useAlert } from 'react-alert'
const clientId="951484766563-lfmsd1f0sksgli8d5nnrk9nln1g8rh8f.apps.googleusercontent.com"
function Logout() {
    const navigate=useNavigate();
    const alert =useAlert();
    const onSuccess=()=>{
        localStorage.clear();
        localStorage.setItem('login',false);
        alert.success("LogoutSuceesfuly");
         navigate('/');
    }
    return (
        <div className="logout">
           < GoogleLogout 
           clientId={clientId}
           buttonText={"logout"}
           onLogoutSuccess={onSuccess}
           />
        </div>
    )
}

export default Logout
