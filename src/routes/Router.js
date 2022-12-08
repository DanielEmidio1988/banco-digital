import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import HomePage from "../pages/HomePage/HomePage"
import DepositPage from "../pages/DepositPage/DepositPage"
import DepositDetailsPage from "../pages/DepositDetailsPage/DepositDetailsPage"
import TransferPage from "../pages/TransferPage/TransferPage"
import TransferDetailsPage from "../pages/TransferDetailsPage/TransferDetailsPage"
import PageNotFound from "../pages/PageNotFound/PageNotFound"


function Router () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/cadastro" element={<RegisterPage/>}/>
                <Route path="/main" element={<HomePage/>}/>
                <Route path="/deposito" element={<DepositPage/>}/>
                <Route path="/deposito/:accountId" element={<DepositDetailsPage/>}/>
                <Route path="/transferencia" element={<TransferPage/>}/>
                <Route path="/transferencia/:accountId" element={<TransferDetailsPage/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router