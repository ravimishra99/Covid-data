
import React from 'react';
import Navigation from './Components/Navigation';
import {Outlet} from "react-router-dom"


function App() {
  return (
    <div>
     <Navigation />
     <Outlet/>
    </div>
  );
}

export default App;



