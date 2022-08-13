import React from 'react';
import './App.css';
import Login from './pages/Login';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return ( <div className = "app" >
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
        </div>
    );
}

export default App;