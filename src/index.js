import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthContextProvider from './Authentication/contextApi';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <BrowserRouter> 
 <AuthContextProvider>
      <ChakraProvider>
           <App />
     </ChakraProvider>
     </AuthContextProvider>
 </BrowserRouter>
   

);

