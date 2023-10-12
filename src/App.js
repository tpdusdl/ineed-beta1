import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function App() {
  return (
  
    <div className="App">
      <BrowserRouter>
          <Routes>
            
            <Route path="/user/main" element={<Main />}></Route>
          
            
            <Route path="/" element={<GoogleOAuthProvider clientId={'505023142086-ksfstvllrbegphdf68qhr8fg4ko87nl3.apps.googleusercontent.com'}>
                <Login />
              </GoogleOAuthProvider>
            }></Route>
            
          </Routes>
          </BrowserRouter>
      </div>
   
  );
};