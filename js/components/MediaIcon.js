import media from "../consts/media.js";

export default ({ name }) => {
    return /*html*/ `
        <a href="${media[name]}" class="media">
            <img src="/images/icons/${name}.svg" alt="${name}" class="media__icon"/>
        </a>`;
};
