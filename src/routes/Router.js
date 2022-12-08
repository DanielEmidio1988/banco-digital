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
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/main" element={<HomePage/>}/>
                <Route path="/deposit" element={<DepositPage/>}/>
                <Route path="/deposit/:accountId" element={<DepositDetailsPage/>}/>
                <Route path="/transfer" element={<TransferPage/>}/>
                <Route path="/transfer/:accountId" element={<TransferDetailsPage/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router