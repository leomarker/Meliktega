import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import io from "socket.io-client";

import Welcome from "./componets/Welcome";
import Auth from "./componets/Auth";
import Signup from "./componets/Signup";
import SetProfile from "./componets/SetProfile";
import ChatUi from "./componets/ChatUi";
import PrivateRoutes from "./componets/PrivateRoutes";

const socket = io.connect("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="login" element={<Auth />}></Route>

          <Route
            path="/setprofile"
            username={username}
            setUsername={setUsername}
            socket={socket}
            element={<SetProfile />}
          />
          <Route
            path="/chat"
            username={username}
            setUsername={setUsername}
            socket={socket}
            element={<ChatUi />}
          />

          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
