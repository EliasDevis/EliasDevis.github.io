import MediaIcon from "./MediaIcon.js";
import media from "../consts/media.js";

export default () => {
    return /*html*/ `
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__info">
                        <div class="footer__header">
                            <div class="logo">
                                <img src="/images/logo.svg" alt="logo" class="logo__img">
                                <div class="logo__name">Elias</div>
                            </div>
                            <a class="footer__email" href="${media.email}">${media.emailRaw}</a>
                        </div>

                        <p class="footer__description">Web designer and front-end developer based in Ukraine</p>
                    </div>
                    <div class="footer__media">
                        <div class="footer__title">Media</div>
                        <div class="footer__list">
                            ${["figma", "github", "discord"]
                                .map((name) => MediaIcon({ name }))
                                .join("")}
                        </div>
                    </div>
                </div>
                <div class="footer__copyright">© Copyright 2022. Made by Elias</div>
            </div>

        </footer>
    `;
};
