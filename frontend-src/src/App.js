import React,{ useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [nic, setNic] = useState("");
  const [telnumber, setTelNumber] = useState("");
  
  function sendData(event){
    event.preventDefault();
    const newVisitor = {
      nic,
      telnumber
    
  }

  axios.post("http://localhost:8070/visitor/add", newVisitor).then(() => {
    alert("visitor added!!")
    setNic("");
    setTelNumber("");
  }).catch((err) => {
    alert(err)
  })
  }

  return (
    <div className = "loginBody">
    <body1>
         <form className = "container" id = "login-form" onSubmit = {sendData}>
             
             <div>
                 <input className = "nic" id = "userfield" type = "text" placeholder = "Enter your NIC number" required onChange = {(event) => 
                setNic(event.target.value)}/> 
             </div>
             <div>
                 <input className = "telnumber" id="passwordfield" type="text" placeholder="Enter your mobile number" name="password" required onChange = {(event) => {
                   setTelNumber(event.target.value)
                 }}/>
             </div>
             <div className="second">
                <div>
                   <button id = "login-form-login" name ="loginbtn" type ="submit" className ="btn1"><b>ENTER</b></button> 
                </div>
             </div>

         </form>
     </body1>
     </div>
 )
}

export default App;
