import Hero from "../blocks/home/Hero.js";
import Quote from "../blocks/home/Quote.js";
import Projects from "../blocks/home/Projects.js";

export default () => {
    return /*html*/`
        ${Hero()}
        ${Quote()}
        ${Projects()}
    `;
};
