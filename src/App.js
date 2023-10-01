
import './App.css';
import Homepage from './pages/Homepage/homepage.components';
    import { Navigate, Route, Routes,  } from 'react-router-dom';
  
    import {Header} from './components/Header/header.component';
    import {SignINAndSignUP} from './pages/SignINAndSignUP/SignINAndSignUP.component';
   import WithAdminAuth from './components/hoc/WithAdminAuth';
  
    import {checkUserSession } from './redux/User/user.actions';
import React, { useEffect } from 'react';
import recovery from './pages/Recovery/recovery.component';
import { useDispatch } from 'react-redux';
import Search from './pages/Search/Search.component';
import Admin from './pages/Admin';
import AdminToolbar from './components/AdminToolbar';
import AdminLayout from './layouts/AdminLayout';

import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Footer from './components/Footer';

const App =props=> {

  const dispatch=useDispatch();

  useEffect(()=>{
  dispatch(checkUserSession());
  
  },[]);

 
   
    return (
      <div>
        <AdminToolbar/>
        <Header currentUser={props.currentUser}/>
       <Routes>
       <Route exact path='/' Component={Homepage}/>
      
   
       <Route exact path='/shop' Component={Search}/>
       <Route path='/search/:filterType' Component={Search}/>
       <Route path='/product/:productID' Component={ProductDetails}/>
       <Route exact path='/signin' Component={SignINAndSignUP} render={() =>props.currentUser ? (<Navigate to='/'/>) : (<SignINAndSignUP/> )
            }
          />
     <Route path='/recovery' Component={recovery}/>
        <Route path='/cart' Component={Cart}/>
     <Route path= '/admin' Component={  Admin}/>
          <Route path='/admin' render={() => (
            <WithAdminAuth>
            <AdminLayout> 
              <Admin/>
            </AdminLayout>
            </WithAdminAuth> 
            )} />
      
  
       </Routes>
       <Footer/>
         </div>



    );
  }


export default App;
