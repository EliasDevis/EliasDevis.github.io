import MediaIcon from "./MediaIcon.js";

export default () => {
    return /*html*/ `
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__info">
                        <div class="logo">
                            <img src="/images/logo.svg" alt="logo" class="logo__img">
                            <div class="logo__name">Elias</div>
                        </div>
                        <p class="footer__description">Web designer and front-end developer based in Ukraine</p>
                    </div>
                    <div class="footer__media">
                        ${["codepen", "github", "discord"]
                            .map((name) => MediaIcon({ name }))
                            .join("")}
                    </div>
                </div>
            </div>

        </footer>
    `;
};
