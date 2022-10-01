import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import PopUp from "./popup_components/PopUp";
import Layout from './layout/Layout';
import Home from "./layout/pages/home/Home";
import Gear from "./layout/pages/gear/Gear";
import Games from "./layout/pages/games/Games";
import NoPage from "./layout/pages/noPage/NoPage";
import Trello from "./layout/pages/trello/Trello";
import WebsiteLinks from "./layout/pages/webLinks/WebsiteLinks";
import Introduction from "./layout/pages/introduction/Introduction";

function App() {
  const[buttonPopUp, setButtonPopUp] = useState(true);
  return (
    <div>
      <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Introduction" element={<Introduction />} />
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
