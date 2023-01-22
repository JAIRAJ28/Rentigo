import { Routes, Route} from 'react-router-dom';
import Home from '../Components/Home';
import Reservation  from '../Components/reservation';
import  Signup  from '../Components/signup';
import { Cardemos } from '../Components/cardemos';
import { Checkout } from '../Components/checkout/checkout';
import { Demo } from '../Components/moredemo';
import { Admin } from '../adminData/adminComponent/admin';
import { AdminDashboard } from '../adminData/adminComponent/dasboard';
const Routess=()=>{
    return(
        <div>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/carsales" element={<Cardemos/>}/>
               <Route path="/carsales/:userid" element={<Demo/>}/>
               <Route path="/reservation" element={<Reservation/>}/>
               <Route path="/signin" element={<Signup/>}/>
               <Route path="/checkout" element={<Checkout/>}/>
              <Route path="admin" element={<Admin/>}/>
              <Route path="admin/dasboard" element={<AdminDashboard/>}/>
            </Routes>
        </div>
    )
}

export default Routess;