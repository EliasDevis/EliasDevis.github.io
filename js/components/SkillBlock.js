import skills from "../consts/skills.js";
import techs from "../consts/techs.js";

export default ({ id }, t) => {
    return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name">${t[id]}</div>
            <ul class="skill-block__list">
                ${(skills[id].length === 2
                    ? techs.slice(...skills[id])
                    : skills[id].map((techIndex) => techs[techIndex])
                )
                    .map(
                        (tech) =>
                            /*html*/ `<li class="skill-block__skill">${tech}</li>`
                    )
                    .join("")}
            </ul>
        </div>
    `;
};
