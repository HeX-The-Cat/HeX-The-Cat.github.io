import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PopUp from "./popup_components/PopUp";

import Layout from './Layout';
import { Home, Goals, NoPage } from './pages';

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