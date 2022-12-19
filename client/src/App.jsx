import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./componets/Welcome";
import Auth from "./componets/Auth";
import Signup from "./componets/Signup";
import SetProfile from "./componets/SetProfile";
import ChatUi from "./componets/ChatUi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="login" element={<Auth />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/setprofile" element={<SetProfile />} />
          <Route path="/chat" element={<ChatUi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
