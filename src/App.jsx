import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Casino from "./pages/clientPages/Casino";
import Products from "./pages/clientPages/Products";
import NavController from "./pages/dbCOntrollers/NavController";
import CashRegister from "./pages/dbCOntrollers/CashRegister";
import Stock from "./pages/dbCOntrollers/Stock";
import UserList from "./pages/dbCOntrollers/UserList";
import PrivateRoutes from "./router/PrivateRoutes";
import Operations from "./pages/dbCOntrollers/Operations";
import LoginForm from "./pages/clientPages/LoginForm";
import { OperationProvider } from "./context/OperationsContext";
import { UserProvider } from "./context/UserContext";
import CasinoData from "./pages/dbCOntrollers/CasinoData";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between bg-gradient-to-b from-richBlack to-customLightBlue">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Products />} />
          <Route path="casino" element={<Casino />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route
          path="/dbControllers"
          element={
            <PrivateRoutes>
              <NavController />
            </PrivateRoutes>
          }
        >
          <Route index element={<CashRegister />} />
          <Route path="casinoData" element={<CasinoData />} />
          <Route path="stock" element={<Stock />} />
          <Route
            path="userList"
            element={
              <UserProvider>
                <UserList />
              </UserProvider>
            }
          />
          <Route
            path="operations"
            element={
              <OperationProvider>
                <Operations />
              </OperationProvider>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
