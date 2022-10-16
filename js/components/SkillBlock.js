import skills from "../consts/skills.js";
import techs from "../consts/techs.js";

export default ({ name: blockName }) => {
    const skillBlock = skills.find((skill) => skill.name === blockName);

    return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name">${skillBlock.name}</div>
            <ul class="skill-block__list">
                ${techs
                    .slice(...skillBlock.list)
                    .map(
                        (tech) =>
                            /*html*/ `<li class="skill-block__skill">${tech}</li>`
                    )
                    .join("")}
            </ul>
        </div>
    `;
};
