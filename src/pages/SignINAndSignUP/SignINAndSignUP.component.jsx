import React from 'react'
import './SignINAndSignUP.styles.scss'
import SignIn from '../../components/SignIn/signIn.component';
import SignUp from '../../components/SignUp/signUp.components';
export const SignINAndSignUP = () => {
  return (
    <div className='sign-in-sign-up'>
           <SignIn/>
           <SignUp/>
    </div>
 
  )
}
export default SignINAndSignUP;
