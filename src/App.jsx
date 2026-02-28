import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './index.css'
import Home from './Pages/Home';
import Loader from './components/Loader';



const App = () => {
 const [loader,setloader]=useState(true);

  if(loader){
      return <Loader setloader={setloader}/>
  }


  return <div className="bd px-3 pb-2  pt-1 md:px-7  min-h-screen overflow-y-scroll overflow-x-hidden  bg-gradient-to-br from-black via-zinc-900 to-slate-800 text-white font-bold">
    <Home />
    

  </div>
}

export default App;