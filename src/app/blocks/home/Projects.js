import ProjectList from "@/components/ProjectList";

export default (t, t2) => {
    return /*html*/ `
        <section class="projects">
            <div class="projects__header">
                <h2 class="h2">${t.title}</h2>
                <a class="projects__link" href="/projects">${t.button} ~~></a>
            </div>
            ${ProjectList({ limit: 3 }, t2)}
        </section>
    `;
};
