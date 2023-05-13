import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PopUp from "./popup_components/PopUp";

import Layout from './layout/Layout';
import Home from "./layout/pages/home/Home";
import Goals from "./layout/pages/goals/Goals";

import NoPage from "./layout/pages/nopage/NoPage";

const App = () => {

  const[buttonPopUp, setButtonPopUp] = useState(true);

  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="goals" element={<Goals />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App

//<PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} />