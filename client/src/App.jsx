import "./App.css";
import { Routes, Route } from "react-router-dom";
import io from "socket.io-client";

import Welcome from "./componets/Welcome";
import Auth from "./componets/Auth";
import Signup from "./componets/Signup";
import SetProfile from "./componets/SetProfile";
import ChatUi from "./componets/ChatUi";
import PrivateRoutes from "./componets/PrivateRoutes";
import { AuthProvider } from "./hooks/useAuth";

// const socket = io.connect("http://localhost:5000");

function App() {
  // const [username, setUsername] = useState("");

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="login" element={<Auth />}></Route>

          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/setprofile" element={<SetProfile />} />
            <Route path="/chat" element={<ChatUi />} />
          </Route>

          <Route path="signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
