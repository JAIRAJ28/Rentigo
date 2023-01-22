import { Routes, Route} from 'react-router-dom';
import Home from '../Components/Home';
import Reservation  from '../Components/reservation';
import  Signup  from '../Components/signup';
import { Cardemos } from '../Components/cardemos';
import { Checkout } from '../Components/checkout/checkout';
import { Demo } from '../Components/moredemo';
import { Admin } from '../adminData/adminComponent/admin';
import { AdminDashboard } from '../adminData/adminComponent/dasboard';
import { PrivateRoute } from '../Authentication/PrivateRoute';
import OrmAdmin from '../adminData/adminComponent/formPost';
import {Rented} from '../adminData/adminComponent/rented';
const Routess=()=>{
    return(
        <div>
            <Routes>
               <Route path="/" element={<Home/>}/>
              
               <Route path="/carsales" element={
                <PrivateRoute>
               <Cardemos/>
               </PrivateRoute>
               }/>

               
               <Route path="/carsales/:userid" element={<Demo/>}/>
               <Route path="/reservation" element={<Reservation/>}/>
               <Route path="/signin" element={<Signup/>}/>
               <Route path="/checkout" element={<Checkout/>}/>
              <Route path="admin" element={<Admin/>}/>
              <Route path="admin/dasboard" element={<AdminDashboard/>}/>
              <Route path="admin/dasboard/form" element={<OrmAdmin/>}/>
              <Route path="admin/dasboard/rented" element={<Rented/>}/>
            </Routes>
        </div>
    )
}

export default Routess;