import Project from "../components/Project.js";
import projects from "../consts/projects.js";


export default ({ title, filter = () => true, limit = projects.length }) => {
    return /*html*/ `
        <div>
            ${title ? `<h2 class="h2">${title}</h2>` : ""}
            <div class="project-list">
                ${projects
                    .filter(filter)
                    .slice(0, limit)
                    .sort((a, b) => a.hasImage - b.hasImage)
                    .map(({ id }) => Project({ id }))
                    .join("")}
            </div>
        </div>
    `;
};
