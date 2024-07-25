import Navbar from "./Navbar";
import Main from "./Main";
import Middle from "./Middle";
import Footer from "./Footer";
import Market from "./Market";
import Register from "./Register";
import Api from "../api/Api";
import Home from "./Home";
import About from "./About";
import ThreeJSScene from "./ThreeJSScene"
import Background from "./Background";

export {
    Navbar,
    Main,
    Middle,
    Footer,
    Market,
    Register,
    Api,
    Home,
    About,
    ThreeJSScene,
    Background
}

export const navbarLinks = [
    {
        title: 'Home',
        id: 1,
        path: '/'
    },
    {
        title: 'Market',
        id: 2,
        path: 'market'
    },
    {
        title: 'About',
        id: 3,
        path: 'about'
    }
];