import Project from "../../components/Project.js";
import projects from "../../consts/projects.js";

export default () => {
    return /*html*/ `
        <div class="projects">
            <div class="projects__header">
                <h2 class="h2">projects</h2>
                <a href="/projects">All projects ~~></a>
            </div>
            <div class="projects__list">
                ${projects.slice(0, 3).map(({ id }) => Project({ id })).join("")}
            </div>
        </div>
    `;
};
