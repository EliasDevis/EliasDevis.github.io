export default (t) => {
    return /*html*/`
        <section class="facts">
            <h2 class="h2">${t.title}</h2>
            <div class="facts__content">
                <ul class="facts__list">
                    ${t.list.map(fact => /*html*/`
                        <li class="fact">${fact}</li>
                    `).join("")}
                </ul>
                <div class="facts__illustrations">
                    
                </div>
            </div>

        </section>
    `
}