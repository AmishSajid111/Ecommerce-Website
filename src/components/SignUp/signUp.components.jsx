import React, { useEffect, useState } from 'react';

import FormInput from './../../components/forms/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { useDispatch, useSelector } from 'react-redux';
import {  signUpUserStart } from '../../redux/User/user.actions';
import './signUp.styles.scss';

const mapState=({user})=>({
  currentUser:user.currentUser,
  userErr:user.userErr
})
const SignUp =props=>{

  const {currentUser,userErr}=useSelector(mapState);
const [displayName,setDisplayName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState("");
const [setError]=useState([])


useEffect(()=>{
  if(currentUser)
  {
   setDisplayName("");
   setConfirmPassword("");
   setEmail("");
   setPassword("");

  }
},[currentUser]);
useEffect(()=>{
 
  if(Array.isArray(userErr)&& userErr.length>0)
  {
  setError(userErr);
  }
  
},[userErr]);
const dispatch=useDispatch();
  const handleSubmit =  event => {
    event.preventDefault();
    dispatch(signUpUserStart({displayName, email, password, confirmPassword}));
  };

   
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName' 
            value={displayName}
          handleChange={e=>setDisplayName(e.target.value)}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={e=>setEmail(e.target.value)}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={e=>setPassword(e.target.value)}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={e=>setConfirmPassword(e.target.value)}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit' onClick={handleSubmit}>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }


export default SignUp;