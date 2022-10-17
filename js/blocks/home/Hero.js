export default (t) => {
    return /*html*/ `
        <div class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                <a class="button button__primary" href="/contacts">${t.button} ##</a>
            </div>
            <div class="hero__illustration">
                <img src="/images/hero.png" alt="Elias" class="hero__image">
                <div class="hero__status">${t.status} <a href="https://elias-dev.ml">Portfolio</a></div>
            </div>
        </div>
    `;
};
