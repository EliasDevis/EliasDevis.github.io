import SkillBlock from "../../components/SkillBlock.js";
import skills from "../../consts/skills.js";

export default (t) => {
    return /*html*/ `
        <div class="skills">
            <h2 class="h2">${t.title}</h2>
            <div class="skills__content">
                <div class="skills__ilustrations">

                </div>
                <div class="skills__list">
                    ${skills
                        .filter((skill) => skill.name !== "Tools i ")
                        .map(({ name }) => SkillBlock({ name }))
                        .join("")}
                </div>

            </div>

        </div>
    `;
};
