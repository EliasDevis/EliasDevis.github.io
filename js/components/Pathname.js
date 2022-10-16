export default ({ description }) => {
    return /*html*/`
        <div class="pathname">
            <h1 class="h1 pathname__name">${window.location.pathname.slice(1)}</h1>
            <p class="pathname__description">${description}</p>
        </div>
    `
}