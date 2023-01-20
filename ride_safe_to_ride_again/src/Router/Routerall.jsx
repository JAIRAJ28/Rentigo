import { Routes, Route} from 'react-router-dom';
import Home from '../Components/Home';
import Reservation  from '../Components/reservation';
import  Signup  from '../Components/signup';
import { Cardemos } from '../Components/cardemos';

import { Demo } from '../Components/moredemo';
const Routess=()=>{
    return(
        <div>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/carsales" element={<Cardemos/>}/>
               <Route path="/carsales/:userid" element={<Demo/>}/>
               <Route path="/reservation" element={<Reservation/>}/>
               <Route path="/signin" element={<Signup/>}/>

            </Routes>
        </div>
    )
}

export default Routess;