import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/codeWithAmish.svg";
import  '../../components/Header/header.styles.scss';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import {  useDispatch, useSelector } from "react-redux";
import { signOutUserStart } from "../../redux/User/user.actions";

  import CartIcon from '../cart-icon/cart-icon.component';
  const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
  });
export const Header = props => {
  const dispatch=useDispatch();
  const { currentUser , totalNumCartItems } = useSelector(mapState);
  const signOut=()=>{
     dispatch(signOutUserStart());
  }
  
  return (
    <div className="header">
      <Link to="/" className="logo-container ">
        <Logo className="logo" />
      </Link>
      <div className="options">
      
      
        <Link to="/" className="option ">
         HOME
        </Link>
        <Link to="/shop" className="option ">
        SHOP
        </Link>
        <Link to="/cart">
              <CartIcon total={totalNumCartItems}/>  
                <i className="fas fa-shopping-basket"></i>
              </Link>
 {       currentUser ?
  ( <div>
    <span className="option" onClick={()=>signOut()} >SIGN OUT</span>

</div> 
  )
   :
       ( <Link to="/signin" className="option">
          SIGN IN
        </Link>)}
      </div>
    </div>
  );
};




export default Header;


