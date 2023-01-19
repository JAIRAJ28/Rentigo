import { Routes, Route} from 'react-router-dom';
import Home from '../Components/Home';
import { Login } from '../Components/login';
import  Registration  from '../Components/signup';
import { Cardemos } from '../Components/cardemos';
import { Cart } from '../Components/cart';
import { Demo } from '../Components/demo';
const Routess=()=>{
    return(
        <div>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/cardemos" element={<Cardemos/>}/>
               {/* <Route path="/login" element={<Login/>}/> */}
               <Route path="/signin" element={<Registration/>}/>

            </Routes>
        </div>
    )
}

export default Routess;