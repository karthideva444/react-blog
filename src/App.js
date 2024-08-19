import Home from './screens/home/Home';
import {Navbar}  from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import { Postdetail } from './screens/postdetail/Postdetail';
import { Createpost } from './screens/create/Createpost.js';
import { Editpost } from './screens/edit/Editpost.js'
import { Themeswitch } from './switch/Themeswitch.js';
import './App.css'
import { useThemeContext } from './hooks/useThemeContext.js';


const App = () => {
  const {theme} = useThemeContext()
  return (
    <div className={`App ${theme}bg`}> 
     <BrowserRouter>
        <Navbar/>
        <Themeswitch/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Createpost/>}/>
            <Route path="/post/:id" element={<Postdetail/>}/>
            <Route path="/Edit/:id" element={<Editpost/>}/>
          </Routes>
          </div>
     </BrowserRouter>
    </div>
  )
}

export default App;