import { BrowserRouter, Routes, Route } from "react-router";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage"
import { AuthProvider } from "./Context/AuthContext";
import AdminLayout from "./AdminLayout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* RUTAS SIN NAVBAR */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />

          {/* RUTAS ADMIN */}
          <Route element={<AdminLayout />}>
            <Route path="/register" element={<RegisterPage/>} />

            <Route path="/customers" element={<h1>Customer Page</h1>} />

            <Route path="/add-customer" element={<h1>New Customer</h1>} />

            <Route path="/customer/:id" element={<h1>Update Customer</h1>} />

            <Route path="/profile" element={<h1>Profile</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
