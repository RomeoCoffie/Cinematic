import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Pages/Homepage/Home';
import Signs from './Components/Pages/Signs/Signs';
import Clients from './Components/Pages/Clients/Clients';
import Ads from './Components/Pages/Ads/Ads';
import Admins from './Components/Pages/Admin/Admins';

function fullApp() {
  let paths=(
    <Routes>
      <Route path="/" exact element={<Signs/>} />
      <Route path="/watch" exact element={<Home/>} />
      <Route path="/clients" exact element={<Clients/>} />
      <Route path="/ads" exact element={<Ads/>} />
      <Route path="/admins" exact element={<Admins/>} />
    </Routes>
  )
  return (
    <div className="fullApp">
      {paths}
    </div>
  );
}

export default fullApp;
