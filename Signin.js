import React, { useState } from "react"
const Signin = () => {
    const[data,setData]=useState(
        {
            username:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    );
    
    const{username,email,password,confirmPassword}=data
     
    const handler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
       e.preventDefault();
       if(username.length<5){
        alert("username characters must be greater than 5")
     }
     else if(password!="samar"){
       alert("incorrect password")
     }
     else if(password != confirmPassword){
        alert("incorrect password")
     }
     else{
      console.log("Login Success..");
     }
    }
   
    return (
    <div>
 <center>
            <h1 style={{color:"blue"}}>LOGIN PAGE</h1>
            <form onSubmit={submitHandler}>
             USERNAME : <input className="form-control" style={{width:"30%"}} type="text" name='username' value={username} onChange={handler}/><br/><br/>
                EMAIL : <input className="form-control" style={{width:"30%"}} type="email" name='email' value={email} onChange={handler}/><br/><br/> 
               PASSWORD : <input className="form-control" style={{width:"30%"}} type="password" name='password' value={password} onChange={handler}/><br/><br/>
               CONFIRM PASSWORD : <input className="form-control" style={{width:"30%"}} type="password" name='confirmPassword' value={confirmPassword} onChange={handler}/><br/><br/>
                <input className="btn btn-success" type="submit" value="Submit" />

            </form>
        </center>
        
    </div>
  )
}

export default Signin
