import Home from './screens/home/Home';
import {Navbar}  from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import { Postdetail } from './screens/postdetail/Postdetail';
import { Createpost } from './screens/create/Createpost.js';


const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Createpost/>}/>
            <Route path="/post/:id" element={<Postdetail/>}/>
          </Routes>
          </div>
     </BrowserRouter>
    </div>
  )
}

export default App;