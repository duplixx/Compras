import Home from "./Pages/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Product from './components/product'
import Cart from "./components/cart";
import Category from "./Pages/category";
export const routes=[
    {path:"/",element:<Home/>},
    {path:"/login",element:<Login/>},
    {path:"/signup",element:<Signup/>},
    {path:"/product/:pid",element:<Product/>},
    {path:"/cart",element:<Cart/>},
    {path:"/category/:cid",element:<Category/>},


    
]