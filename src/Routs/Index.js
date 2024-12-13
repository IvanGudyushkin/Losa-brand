import Main from "../Pages/Main/Main";
import Collection from "../Pages/Collection/Collection";
import Cart from "../Pages/Cart/Cart";
import Order from "../Pages/Order/Order";
import Product from "../Pages/Product/Product";
import Contacts from "../Pages/Contacts/Contacts";
import About from "../Pages/About/About";

export const InfoRoutes = [
    { path: '/', element: <Main />},
    { path: '/collection', element: <Collection/>},
    { path: '/cart', element: <Cart/>},
    { path: '/order', element: <Order/>},
    { path: '/collection/:id', element: <Product /> },
    { path: '/contacts', element: <Contacts /> },
    { path: '/about', element: <About /> },
]
