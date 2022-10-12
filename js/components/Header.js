const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "works",
        path: "/works",
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

                <a class="logo" href="/">
                    <img class="logo__img" src="/images/logo.svg" alt="Elias logo">
                    <span class="logo__name">Elias</span>
                </a>
                <div class="header__links">
                    ${links
                        .map(
                            (link) => /*html*/ `
                            <a href="${link.path}" class="header__link">${link.name}</a>
                        `
                        )
                        .join("\n")}
                </div>
                <div class="dropdown">
                    <span class="dropdown__label">EN</span>

                    <div class="dropdown__list">
                        <div class="dropdown__option">RU</div>
                        <div class="dropdown__option">UA</div>
                    </div>
                </span>

        </header>
    `;
};
