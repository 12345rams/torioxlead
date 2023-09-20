import React from 'react'
import GetAppIcon from '@mui/icons-material/GetApp';
import './footer.css'
import playstore from '../images/game.png'
import iosstore from '../images/app.png'
function footer() {
    return (
        <footer>
         <div className="leftFooter">
         <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <GetAppIcon />
         < img src={iosstore} alt=""  width="200px"/>
        <img src={playstore} alt="" width="200px"/>
         </div>
         <div className="midFooter">
         <h1>TorioxLead</h1>
        <p>High Quality is our first priority</p>
        <p>100k people liked our services</p>
        <p>Copyrights 2023 &copy; Toriox</p>
         </div>
         <div className="midFooter">
         <h1>Services</h1>
        <p>SEO Services</p>
        <p ><a href="/start">Portal</a></p>
        <p>Chatbots and Live Chat</p>
         </div>
         <div className="rightFooter">
         <h4>Follow Us</h4>
         
         <a href="http://instagram.com/ramvijay2406">Instagram<br></br></a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a><br></br>
        <a href="http://instagram.com/ram">Facebook</a>
         </div>
        </footer>
    );
}

export default footer