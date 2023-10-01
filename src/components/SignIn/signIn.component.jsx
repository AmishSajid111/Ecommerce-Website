import React, { useState,useEffect } from 'react';
import FormInput from './../../components/forms/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { emailSignInStart,googleSignInStart } from '../../redux/User/user.actions';
import { useDispatch,useSelector } from 'react-redux';
import '../SignIn/signIn.styles.scss';

import { Link, useNavigate} from 'react-router-dom';



const mapState=({user})=>({
currentUser:user.currentUser
})
const SignIn =props=>{
const navigate=useNavigate();
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const dispatch= useDispatch();
const {currentUser}=useSelector(mapState);
  useEffect(()=>{
if(currentUser)
{
  setEmail("");
  setPassword("");

navigate('/');
}
  },[currentUser])


const handleSubmit =  event => {
    event.preventDefault();
dispatch( emailSignInStart({email,password}));
  };

  
 const handleGoogle=()=>{
  dispatch(googleSignInStart())
 }

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={e=>setEmail(e.target.value)}
            value={email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={e=>setPassword(e.target.value)}
            label='Password'
            required
          />
          <div className='Password'>
          <Link style={{color:'#4285f4'}} to='/recovery'>Reset Password?</Link>
          </div>
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={handleGoogle} isGoogleSignIn>
           Google Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }


export default SignIn;