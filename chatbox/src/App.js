import "./App.css";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";
// import socketIO from "socket.io-client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const ENDPOINT = "http://localhost:8080/";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
