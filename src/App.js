import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MyRoutes from "./Routs/Routes";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {CartProvider} from "./Context/cartContext";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <CartProvider>
                <Header/>
                <MyRoutes/>
                <Footer/>
            </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
