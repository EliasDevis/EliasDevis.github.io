import MediaIcon from "./MediaIcon";
import media from "@/consts/media";

export default (t) => {
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

                        <p class="footer__description">${t.description}</p>
                    </div>
                    <div class="footer__media">
                        <div class="footer__title">${t.media}</div>
                        <div class="footer__list">
                            ${["figma", "github", "discord"]
                                .map((name) => MediaIcon({ name }))
                                .join("")}
                        </div>
                    </div>
                </div>
                <div class="footer__copyright">© ${t.copyright}</div>
            </div>

        </footer>
    `;
};
