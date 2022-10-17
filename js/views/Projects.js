import Pathname from "../components/Pathname.js";
import ProjectList from "../components/ProjectList.js";

export default (t, t2) => {
    return /*html*/ `
        ${Pathname({ description: t.description })}
        ${ProjectList({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}
        ${ProjectList({ title: t.small, filter: (p) => p.isSmall }, t2.projects)}
    `;
};
