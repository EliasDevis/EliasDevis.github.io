export default ({ type, text, link }) => {
    return /*html*/ `
        <a class="button ${type}" href="${link}">${text}</a>
    `;
};
