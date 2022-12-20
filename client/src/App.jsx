import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./componets/Welcome";
import Auth from "./componets/Auth";
import Signup from "./componets/Signup";
import SetProfile from "./componets/SetProfile";
import ChatUi from "./componets/ChatUi";
import PrivateRoutes from "./componets/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="login" element={<Auth />} />
          <Route path="signup" element={<Signup />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/setprofile" element={<SetProfile />} />
            <Route path="/chat" element={<ChatUi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
