import SkillBlock from "../../components/SkillBlock.js";
import skills from "../../consts/skills.js";

export default (t, t2) => {
    return /*html*/ `
        <div class="skills">
            <h2 class="h2">${t.title}</h2>
            <div class="skills__content">
                <div class="skills__ilustrations">

                </div>
                <div class="skills__list">
                    ${Object.keys({
                        ...skills,
                        tool: undefined,
                    })
                        .map((id) => SkillBlock({ id }, t2))
                        .join("")}
                </div>

            </div>

        </div>
    `;
};
