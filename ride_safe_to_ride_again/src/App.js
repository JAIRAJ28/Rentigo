import Nav from './landingpage/Navbar/Navbar';
import Routess from './Router/Routerall';
import './App.css';
// import Footer from './landingpage/Footer/Footer';

// import Carousel from "./Components/Carousel";
// import Data from "./Data.json";
function App() {
  return (
    <div className="App">
        <Nav/>
        <Routess/>
        {/* <Carousel start={Data.banner.start} /> */}
    </div>
  );
}

export default App;
