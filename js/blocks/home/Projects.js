import Project from "../../components/Project.js";
import ProjectList from "../../components/ProjectList.js";
import projects from "../../consts/projects.js";

export default () => {
    return /*html*/ `
        <div class="projects">
            <div class="projects__header">
                <h2 class="h2">projects</h2>
                <a href="/projects">All projects ~~></a>
            </div>
            ${ProjectList({ limit: 3 })}
        </div>
    `;
};
