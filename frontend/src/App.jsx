import "./App.css";
// import { createHashRouter } from "react-router-dom";
// import { RouterProvider } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { Route, Routes, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import SidebarContextProvider from "./store/sidebarContextProvider";
import ContactUsPage from "./pages/ContactUsPage";
import ForgotPassPage from "./pages/ForgotPass/ForgotPassPage";
import ForgotPassIDPage from "./pages/ForgotPass/ForgotPassIDPage";
import ForgotPassConfirmPage from "./pages/ForgotPass/ForgotPassConfirmPage";
import UpdateDetail from "./pages/UpdateDetail";
import Errorpage from "./pages/Errorpage";

export const ToLink = 'http://127:0.0.1:8000';



function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/forgotpassword" element={<ForgotPassPage />} />
        <Route path="/login/forgotpassword/:id" element={<ForgotPassIDPage />} />
        <Route path="/login/forgotpassword/:id/confirm" element={<ForgotPassConfirmPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/:id/updatedetail" element={<UpdateDetail />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  return (
    <>
    <HashRouter>
      <SidebarContextProvider>
        <div className="h2 d-flex align-item-center justify-content-center">𝐹𝓁𝒾𝓅𝓏𝑜𝓃 : 𝒯𝒽𝑒 𝐸-𝒞𝒶𝓇𝓉 𝒜𝓅𝓅
        </div>
        <Navbar />
        <RoutesWithAnimation />
      </SidebarContextProvider>
    </HashRouter>
    <MainItems></MainItems>
    </>
  );
}

export default App;
