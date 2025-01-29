import routes from "./consts/routes";
import startTitleAnimation from "./helpers/startTitleAnimation";
import localeHandler from "./helpers/localeHandler";
import replacePath from "./helpers/replacePath";

import "styles/styles.sass";

const rootId = "root";
async function render() {
    const path = routes[window.location.pathname] ?? routes["/404"];

    const Layout = (await import("./views/Layout.js")).default;

    startTitleAnimation(path.name);

    document.getElementById(rootId).innerHTML = await Layout(
        (await import(`./views/${path.element}.js`)).default,
        path
    );
}

replacePath()
    .then(() => render())
    .then(() => localeHandler());
