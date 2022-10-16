import routes from "../consts/routes.js";
import MediaIcon from "./MediaIcon.js";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "about-me",
        path: "/about-me",
    },
    {
        name: "contacts",
        path: "/contacts",
    },
];

export default () => {


    return /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" />

            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    ${["discord", "github", "email"].map((name) =>
                        MediaIcon({ name })
                    ).join("")}
                </div>
            </div>


            <div class="container">

                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/logo.svg" alt="Elias logo">
                        <span class="logo__name">Elias</span>
                    </a>
                    <div class="header__links">
                        ${links
                            .map(
                                (link) => /*html*/ `
                                <a href="${link.path}" class="header__link ${window.location.pathname === link.path ? 'header__link_active' : ''}">${link.name}</a>
                            `
                            )
                            .join("")}
                    </div>
                    <div class="dropdown">
                        <span class="dropdown__label">en</span>

                        <div class="dropdown__list">
                            <div class="dropdown__option">ru</div>
                            <div class="dropdown__option">ua</div>
                        </div>
                    </div>

                </div>
            </div>
            

        </header>
    `;
};
