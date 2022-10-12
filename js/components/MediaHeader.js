import MediaIcon from "./MediaIcon.js";

export default () => {
    return /*html*/ `
        <div class="media-header">
            <span class="media-header__line"></span>
            <div class="media-header__links">
                ${["discord", "github", "email"].map((name) =>
                    MediaIcon({ name })
                ).join("")}
            </div>
        </div>
    `;
};
