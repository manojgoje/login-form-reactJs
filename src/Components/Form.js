import React, { useState } from 'react'
import './Form.css';

const Form = () => {

const [user, setuser] = useState({username:"",email:"",mob:"",password:"",confirmPassword:""});

const [error, seterror] = useState({})
const [flag, setflag] = useState(false)

const handleChange =(e) =>{
    console.log(e.target.value)
    setuser({...user,[e.target.name]:e.target.value})

}
    const handleSubmit = (e)=>{
        const newError = {};

        e.preventDefault();
        if(user.username == "")
        {
            // seterror({username:"please provide username here "})
            newError.username ="please provide username here";
        }else if(user.username.length<3 || user.username.length>=10)
        {
            newError.username = "Username must be in range 3 to 10 charecter"
        }
        if(user.email == "")
        {
            // seterror({email:"please provide email id here"})
            newError.email ="please provide email here";
        }
        else if(user.email.indexOf("@")==0)
        {
            newError.email = "Invalid position of '@' "
        }
        else if(user.email.charAt(user.email.length-4) != "."  && ( user.email.charAt(user.email.length-3) != "."))
        {
            newError.email = "email is not valid"
        }
        // else if()
         if(user.mob == "")
        {
            // seterror({mobile:"please provide mobile number here"})
            newError.mobile ="please provide mobile no here";
        }
        else if(isNaN(user.mob))
        {
            newError.mobile = "please provide valid digit only"
        }
         if(user.password =="")
        {
            // seterror({password:"please provide password"})
            newError.password ="please provide password here";
        }else if(user.password.length<=5 || user.password.length>10)
        {
            newError.password = "plese enter password in greter than 5  char"
        }
        if (user.confirmPassword ==""){
            // seterror({confirmPassword:"provide your password here"})
            newError.confirmPassword ="please provide password here";
        }else if(user.password != user.confirmPassword)
        {
            newError.confirmPassword = "Password does not match"
        }
        else{
                setflag(true);

        }

        seterror(newError)

    }
  return (
    <>
   <h1> {flag?<p>{user.username} you have register succesfully</p>:""} </h1>
    <div className='form-container'>
        <div className='insta-logo'> 
        <h1  >INSTAGRAM</h1>
        </div>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-group'>
                <input type='text' placeholder='username' onChange={handleChange} value={user.username} name='username' autoComplete='off'/>
                <span style={{color:"red"}}> {error.username}</span>
            </div>
           
            <div className='form-group'>
                <input type='TEXT' placeholder='Email'onChange={handleChange} value={user.email} name='email'autoComplete='off'/>
                <span style={{color:"red"}}> {error.email}</span>
            </div>
            <div className='form-group'>
                <input type='text' placeholder='mobile number'onChange={handleChange} value={user.mob} name='mob'autoComplete='off'/>
                <span style={{color:"red"}}> {error.mobile}</span>
            </div>
            <div className='form-group'>
                <input type='password' placeholder='Password'onChange={handleChange} value={user.password} name='password'autoComplete='off'/>
                <span style={{color:"red"}}> {error.password}</span>
            </div>
            <div className='form-group'>
                <input type='text' placeholder='Confirm Password'onChange={handleChange} value={user.confirmPassword} name='confirmPassword'autoComplete='off'/>
                <span style={{color:"red"}}> {error.confirmPassword}</span>
            </div>
            <button type='submit'> Sign Up</button>
        </form>
    </div>
    </>
  )
  
}



export default Form; 
