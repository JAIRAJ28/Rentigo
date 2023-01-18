import { Routes, Route} from 'react-router-dom';
import Home from '../Components/Home';
import { Login } from '../Components/login';
import { Registration } from '../Components/registration';
import { Cardemos } from '../Components/cardemos';
import { Cart } from '../Components/cart';
import { Demo } from '../Components/demo';
const Routess=()=>{
    return(
        <div>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/cardemos" element={<Cardemos/>}/>
               

            </Routes>
        </div>
    )
}

export default Routess;