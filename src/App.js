import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import PopUp from "./popup_components/PopUp";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Gear from './pages/Gear';
import Games from './pages/Games';
import NoPage from "./pages/NoPage";
import Trello from "./pages/Trello";
import WebsiteLinks from "./pages/WebsiteLinks";

function App() {
  const[buttonPopUp, setButtonPopUp] = useState(true);
  return (
    <div>
      <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Gear" element={<Gear />} />
            <Route path="Games" element={<Games />} />
            <Route path="Links" element={<WebsiteLinks />} />
            <Route path="Trello" element={<Trello />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
