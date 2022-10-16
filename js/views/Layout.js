import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

export default (content) => {

    return /*html*/ `
        <div class="container content">
            ${Header()}
            ${content()}
        </div>
        ${Footer()}
    `;
};
