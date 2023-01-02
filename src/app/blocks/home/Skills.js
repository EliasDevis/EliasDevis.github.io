import Dots from "@/components/Dots";
import SkillBlock from "@/components/SkillBlock";
import skills from "@/consts/skills";

export default (t, t2) => {
    return /*html*/ `
        <sections class="skills">
            <h2 class="h2">${t.title}</h2>
            <div class="skills__content">
                <div class="skills__illustrations illustrations">
                    <img src="/images/logo-outline.svg" alt="" class="illustrations__logo">
                    ${Dots({ width: 4, height: 4 })}
                    ${Dots({ width: 6, height: 6 })}
                </div>
                <div class="skills__list">
                    ${Object.keys(skills)
                        .filter(id => id !== "tool")
                        .map((id) => SkillBlock({ id }, t2))
                        .join("")}
                </div>

            </div>

        </sections>
    `;
};
