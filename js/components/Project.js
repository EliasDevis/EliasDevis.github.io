import projects from "../consts/projects.js";

export default ({ id }) => {
    const { hasImage, techs, name, description, links } = projects.find(
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
                ${techs.map(
                    (tech) => /*html*/ `<li class="project__tech">${tech}</li>`
                ).join("")}
            </ul> 

            <div class="project__content">
                <div class="project__name">${name}</div>
                <div class="project__description">${description}</div>
                <div class="project__links">
                    ${Object.entries(links).map(
                        (link) => /*html*/ `
                            <a href="${link[1]}" class="button ${
                            link[0] === "cached" ? "button__secondary" : ""
                        }">${link[0][0].toUpperCase()}${link[0].slice(1)} =></a>
                        `
                    ).join("")}
                </div>
            </div>
        </div> 
    `;
};
