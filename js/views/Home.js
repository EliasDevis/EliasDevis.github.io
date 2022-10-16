import Hero from "../blocks/home/Hero.js";
import Quote from "../blocks/home/Quote.js";
import Projects from "../blocks/home/Projects.js";
import Skills from "../blocks/home/Skills.js";
import About from "../blocks/home/About.js";

export default () => {
    return /*html*/`
        ${Hero()}
        ${Quote()}
        ${Projects()}
        ${Skills()}
        ${About()}
    `;
};
