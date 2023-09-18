import React from 'react';
import {Routes,Route} from 'react-router';
import Home from '../pages/Home';
import Gigs from '../pages/Gigs';
import AddGigs from '../pages/AddGigs';
import AllTypes from '../pages/AllTypes';
import ErrorPage from '../pages/ErrorPage';
import Detail from '../pages/Detail';
import Order from '../pages/Order';
import Search from '../pages/Search';
import Register from '../pages/Register';
import Login from '../pages/Login';
import LostPass from '../pages/LostPass';
import Pass from '../pages/Pass';
import Sales from '../pages/Sales';
import Chat from '../pages/Chat';
import Msg from '../pages/Msg';
import EditGig from '../pages/EditGigs';
import Profile from '../pages/Profile';
import Payment from '../pages/Payment';
import Favourite from '../pages/Favourite';
import Policy from '../pages/Policy';
import Event from '../pages/Event';
import Business from '../pages/Business';
import Blog from '../pages/Blog';
import Select from '../pages/FiverrSelect';
import Work from '../pages/Work';
import Service from '../pages/Service';
import Contact from '../pages/Contact';
import News from '../pages/News';
import Pop from '../pages/Pop';

const Router = () => {
  return (  
    <>
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/gigs' Component={Gigs} />
            <Route path='/pop' Component={Pop} />
            <Route path='/favourite' Component={Favourite} />
            <Route path='/add_gigs' Component={AddGigs} />
            <Route path='/edit_gigs' Component={EditGig} />
            <Route path='/sales' Component={Sales} />
            {/* <Route path='/payment' Component={Payment} /> */}
            <Route path='/all_types' Component={AllTypes} />
            <Route path='/detail' Component={Detail} />
            <Route path='/work' Component={Work} />
            <Route path='/blog' Component={Blog} />
            <Route path='/fiverr_select' Component={Select} />
            <Route path='/business' Component={Business} />
            <Route path='/order' Component={Order} />
            <Route path='/search' Component={Search} />
            <Route path='/chat' Component={Chat} />
            <Route path='/register' Component={Register} />
            <Route path='/login' Component={Login} />
            <Route path='/profile' Component={Profile} />
            <Route path='/msg' Component={Msg} />
            <Route path='/event' Component={Event} />
            <Route path='/service' Component={Service} />
            <Route path='/contact' Component={Contact} />
            <Route path='/news' Component={News} />
            <Route path='/policy' Component={Policy} />
            <Route path='/lost_password' Component={LostPass} />
            <Route path='/set_password' Component={Pass} />
            <Route path='*' Component={ErrorPage}/>
        </Routes>
    </>
  )
}

export default Router;