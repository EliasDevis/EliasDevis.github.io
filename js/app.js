import Layout from "./views/Layout.js";

import routes from "./consts/routes.js";
// import cached from "./consts/cached.js";
import startTitleAnimation from "./helpers/startTitleAnimation.js";
import localeHandler from "./helpers/localeHandler.js";
import loadCssFile from "./helpers/loadCssFile.js";
import replacePath from "./helpers/replacePath.js";

const rootId = "root";
async function render() {
    // const cachedSite = cached[window.location.pathname.slice(1)];

    // if (cachedSite) {
    //     cachedSite.js.forEach((jsFilename) => {
    //         const jsElement = document.createElement("script");

    //         jsElement.src = `/cached/${cachedSite.id}/js/${jsFilename}.js`;
    //         jsElement.onload = (e) => {
    //             setTimeout(() => document.querySelectorAll("a").forEach(a => a.href = `/${cachedSite.path}`), 500)
    //         };
    //         jsElement.dataset.spa = "true";

    //         document.head.appendChild(jsElement);
    //     });
    //     document.getElementById(
    //         "default-styles"
    //     ).href = `/cached/${cachedSite.id}/css/main.css`;

    //     return;
    // }

    const path = routes[window.location.pathname] ?? routes["/404"];

    loadCssFile(path.name);
    startTitleAnimation(path.name);

    document.getElementById(rootId).innerHTML = await Layout(
        (
            await import(`./views/${path.element}.js`)
        ).default,
        path
    );
}

replacePath()
    .then(() => render())
    .then(() => localeHandler());
