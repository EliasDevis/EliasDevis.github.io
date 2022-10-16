import skills from "../consts/skills.js";

export default ({ name: blockName }) => {
    const skillBlock = skills.find(skill => skill.name === blockName);

    return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name">${skillBlock.name}</div>
            <ul class="skill-block__list">
                ${skillBlock.list.map(
                    (skill) =>
                        /*html*/ `<li class="skill-block__skill">${skill}</li>`
                ).join("")}
                
            </ul>
        </div>
    `;
};
