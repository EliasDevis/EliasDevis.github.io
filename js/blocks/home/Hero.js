export default () => {
    return /*html*/ `
        <div class="hero">
            <div class="hero__content">
                <h1 class="hero__title">Elias is a <span>web designer</span> and <span>front-end developer</span></h1>
                <div class="hero__description">He crafts responsive websites where technologies meet creativity</div>
                <a class="button button__primary" href="/contacts">Contact me ##</a>
            </div>
            <div class="hero__illustration">
                <img src="/images/hero.png" alt="Elias" class="hero__image">
                <div class="hero__status">Currently working on <a href="https://elias-dev.ml">Portfolio</a></div>
            </div>
        </div>
    `;
};
