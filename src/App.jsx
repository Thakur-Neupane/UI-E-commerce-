import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import UserVerification from "./pages/user/UserVerification";

function App() {
  return (
    <div>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Login />} />
        <Route path="/verify-user" element={<UserVerification />} />

        {/* private routes  */}

        <Route path="admin/new" element={<Register />} />
        <Route path="*" element={<h1>404 Page not found!</h1>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
