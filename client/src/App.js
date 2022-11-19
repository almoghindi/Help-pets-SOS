import './App.css';
import React, { Suspense } from 'react';
import Header from './layout/header/index';
import Footer from './layout/footer/index';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../src/context/auth-context";
import { useAuth } from "../src/hooks/auth-hook";
import LoadingSpinner from "./components/UIElements/LoadingSpinner";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const ForgetPassword = React.lazy(() => import("./pages/ForgetPassword"));
const SOSReport = React.lazy(() => import("./pages/SOSReport"));
const Profile = React.lazy(() => import("./pages/Profile"));
const About = React.lazy(() => import("./pages/About"));
const Store = React.lazy(() => import("./pages/Store"));
const Product = React.lazy(() => import("./pages/Product"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Checkout = React.lazy(() => import("./pages/Checkout"));




function App() {
  const { token, login, logout, userId } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <Header />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/helpets" element={<SOSReport />} />
            <Route path="/about" element={<About />} />

            {!token && (
              <>
                <Route path="/auth" element={<Login />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
                <Route
                  path="/resetpassword/:userId"
                  element={<ResetPassword />}
                />
              </>
            )}
            {token && (
              <>
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<Checkout />} />
              </>
            )}
            <Route path="/store" element={<Store />} />
            <Route path="/product/:productId" element={<Product />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
