import Layout from "./views/Layout.js";

import routes from "./consts/routes.js";
import startTitleAnimation from "./helpers/startTitleAnimation.js";
import localeHandler from "./helpers/localeHandler.js";
import loadCssFile from "./helpers/loadCssFile.js";
import replacePath from "./helpers/replacePath.js";

const rootId = "root";
async function render() {
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
