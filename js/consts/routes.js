import About from "../views/About.js";
import Home from "../views/Home.js";
import Contacts from "../views/Contacts.js";
import Projects from "../views/Projects.js";
import PageNotFound from "../views/404.js";

export default {
    "/": {
        name: "home",
        element: Home,
    },
    "/projects": {
        name: "projects",
        element: Projects,
    },
    "/about-me": {
        name: "about",
        element: About,
    },
    "/contacts": {
        name: "contacts",
        element: Contacts,
    },
    "/404": {
        name: "404",
        element: PageNotFound,
    },
};