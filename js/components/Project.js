import projects from "../consts/projects.js";
import websites from "../consts/websites.js";
import techs from "../consts/techs.js";
import media from "../consts/media.js";

function mapLinks(links) {
    function map(link) {
        let href =
            (link === "live" ? "https://" : websites[link]) + links[link];

        if (link === "figma") href = `https://figma.com/community/file/${links[link]}`
        if (link === "github" && links[link].startsWith("/")) href = media.github + links[link]

        const className = link === "cached" ? "button__secondary" : "";
        const name = `${link[0].toUpperCase()}${link.slice(1)}`;

        return /*html*/ `<a href="${href}" class="button ${className}">${name} =></a>`;
    }

    return Object.keys(links).map(map).join("");
}

export default ({ id }, t) => {
    const { hasImage, techs: projectTech, links } = projects.find(
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
                <div class="project__name">${t[id].name}</div>
                <div class="project__description">${t[id].description}</div>
                <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div> 
    `;
};
