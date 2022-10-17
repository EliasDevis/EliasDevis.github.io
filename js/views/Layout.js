import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

export default (content) => {

    return /*html*/ `
        ${Header()}
        <div class="container content">
            ${content()}
        </div>
        ${Footer()}
    `;
};
