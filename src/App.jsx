import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import WatchesPage from './stores/pages/WatchesPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import ComputerPage from './stores/pages/ComputerPage';
import FridgePage from './stores/pages/FridgePage';
import AuthPage from './stores/pages/AuthPage';

import MobileSingle from './singles/MobileSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import UserCart from './stores/UserCart'
import KitchenSingle from './singles/KitchenSingle'
import MenSingle from './singles/MenSingle'
import WomanSingle from './singles/WomanSingle'
import AcSingle from './singles/AcSingle'
import WatchSingle from './singles/WatchSingle'
import FridgeSingle from './singles/FridgeSingle'
import ComputerSingle from './singles/ComputerSingle'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/mobiles' element={<MobilePage />} />
        <Route path='/watch' element={<WatchesPage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/woman' element={<WomanPage />} />
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/Ac' element={<AcPage />} />
        <Route path="/computers" element={<ComputerPage />} />
         <Route path="/fridge" element={<FridgePage />} />
         <Route path='/auth' element={<AuthPage/>}/>

        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/furniture/:id" element={<FurnitureSingle />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/kitchen/:id" element={<KitchenSingle />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/men/:id" element={<MenSingle />} />
        <Route path="/woman" element={<WomanPage />} />
        <Route path="/woman/:id" element={< WomanSingle />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/ac/:id" element={< AcSingle />} />
        <Route path="/watch" element={<WatchesPage />} />
        <Route path="/watch/:id" element={< WatchSingle />} />
        <Route path="/fridge" element={<FridgePage />} />
        <Route path="/fridge/:id" element={<FridgeSingle />} />
        <Route path="/computers" element={<ComputerPage />} />
        <Route path="/computers/:id" element={<ComputerSingle />} />



        <Route path='/cart' element={<UserCart />} />


      </Routes>
    </div>
  )
}

export default App;


