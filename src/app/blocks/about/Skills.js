import SkillBlock from "@/components/SkillBlock"
import skills from "@/consts/skills"

export default (t, t2) => {
    return /*html*/`
        <section class="skills">
            <h2 class="h2">${t.title}</h2>
            <div class="skills__content">
                ${Object.keys(skills)
                            .map((id) => SkillBlock({ id }, t2))
                            .join("")}
            </div>
        </section>
    `
}
