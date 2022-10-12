import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import MediaHeader from "../components/MediaHeader.js";

export default (content) => {
    return /*html*/ `
        ${MediaHeader()}

        <div class="container content">
            ${Header()}
            ${content()}
        </div>
        ${Footer()}
    `;
};
