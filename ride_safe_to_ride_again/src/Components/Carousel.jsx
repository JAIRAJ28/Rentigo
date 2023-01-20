import React from 'react' 
import Carousel from 'react-bootstrap/Carousel' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
 
 
const Slider = ({ start }) => { 
    return ( 
        <Carousel fade width="10%"
        
        > 
 
            {start.map((item) => ( 
                <Carousel.Item width="100%"> 
                    <img 
                        width="80%" 
                        height={"20px"}
                        className="d-block w-100" 
                        src={item} 
                        alt="First slide" 
                    /> 
                </Carousel.Item> 
            ))} 
 
        </Carousel> 
    ) 
} 
 
export default Slider