import React, { useState ,useEffect} from 'react';
import FormInput from './../../components/forms/form-input/form-input.component';
import '../EmailPassword/styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { resetUserState } from '../../redux/User/user.actions';
import {useDispatch, useSelector } from 'react-redux';
import { resetPasswordStart } from '../../redux/User/user.actions';
import { useNavigate } from 'react-router-dom';
const mapState=({user})=>({
  resetPasswordSuccess:user.resetPasswordSuccess,
 userErr:user.userErr
})
export const Index=props => {
  const navigate=useNavigate();
const [email,setEmail]=useState("");
const [error,setError]=useState([]);
const dispatch=useDispatch();
const {resetPasswordSuccess,userErr}=useSelector(mapState)
useEffect(()=>{
  if(resetPasswordSuccess)
  {
    dispatch(resetUserState())
     setEmail("");
     navigate('/signin');
     
     
     
  }
},[resetPasswordSuccess]);

useEffect(()=>{
  if( userErr)
  {
    if(Array.isArray(userErr)&& userErr.length>0)
    {
    setError(userErr);
    }
       
    
 

   
  }
},[userErr])

  const handleSubmit =  (event) => {
    event.preventDefault();
     dispatch(resetPasswordStart({email}));
    
  };



  
   
    return (
      <div className="Email-Password">
        <h1>Forgot Your Password?</h1>
        <span>
          Enter your email address below, and we’ll send you a link to reset your
          password
        </span>
             <div className="error">{error} </div>
            
        
        
        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={e=>setEmail(e.target.value)}
            value={email}
            label="Email"
            required
          />
          <CustomButton type="submit">Continue</CustomButton>
        </form>
      </div>
    );
  
}

export default Index;