import Pathname from "../components/Pathname.js";
import ProjectList from "../components/ProjectList.js";

export default () => {
    return /*html*/ `
        ${Pathname({ description: "All of my projects" })}
        ${ProjectList({ title: "decent", filter: (p) => !p.isSmall })}
        ${ProjectList({ title: "small", filter: (p) => p.isSmall })}
    `;
};
