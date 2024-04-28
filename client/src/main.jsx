import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./Context/Auth/AuthContext";
import { ThemeProvider } from "./Context/Theme/ThemeContext";
import { SocketProvider } from "./Context/Socket/SocketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    {" "}
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <AuthProvider>
      <ThemeProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </ThemeProvider>
    </AuthProvider>
  </Router>
);
