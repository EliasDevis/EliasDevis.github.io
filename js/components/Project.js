import projects from "../consts/projects.js";
import websites from "../consts/websites.js";
import techs from "../consts/techs.js";

function mapLinks(links) {
    function map(link) {
        let href =
            (link === "live" ? "https://" : websites[link]) + links[link];

        if (link === "cached") href = links[link];

        const className = link === "cached" ? "button__secondary" : "";
        const name = link[0].toUpperCase() + link.slice(1);

        return /*html*/ `<a href="${href}" class="button ${className}">${name} =></a>`;
    }

    return Object.keys(links).map(map).join("");
}

export default ({ id }) => {
    const { hasImage, techs: projectTech, name, description, links } = projects.find(
        (project) => project.id === id
    );

    return /*html*/ `
        <div class="project">
            ${
                hasImage
                    ? `<img src="/images/projects/${id}.jpg" alt="${name}" class="project__image">`
                    : ""
            }
            
            <ul class="project__techs">
                ${projectTech
                    .map(
                        (tech) =>
                            /*html*/ `<li class="project__tech">${techs[tech]}</li>`
                    )
                    .join("")}
            </ul> 

            <div class="project__content">
                <div class="project__name">${name}</div>
                <div class="project__description">${description}</div>
                <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div> 
    `;
};
