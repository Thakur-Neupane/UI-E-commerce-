import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";

function App() {
  return (
    <div>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Login />} />
        <Route path="/verify-user" element={<h1>404 page not found </h1>} />

        {/* private routes  */}

        <Route path="admin/new" element={<Register />} />
        <Route path="*" element={<h1>404 page not found </h1>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
