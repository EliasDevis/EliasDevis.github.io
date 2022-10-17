export default (t) => {
    return /*html*/ `
        <div class="about">
            <div class="about__content">
                <h2 class="h2">${t.title}</h2>
                <div class="about__text">
                    <p class="about__description">${t.p1}</p>
                    <p class="about__description">${t.p2}</p>
                </div>

                <a href="/about-me" class="button">${t.button} -></a>
            </div>
            <img src="/images/about-me.png" alt="" class="about__image">
        </div>
    `;
};
