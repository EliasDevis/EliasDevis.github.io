import Hero from "../blocks/home/Hero.js";
import Quote from "../blocks/home/Quote.js";
import Projects from "../blocks/home/Projects.js";
import Skills from "../blocks/home/Skills.js";
import About from "../blocks/home/About.js";
import Contacts from "../blocks/home/Contacts.js";

export default (t, t2) => {
    return /*html*/`
        ${Hero(t.hero)}
        ${Quote(t.quote)}
        ${Projects(t.projects, t2.projects)}
        ${Skills(t.skills)}
        ${About(t.about)}
        ${Contacts(t.contacts)}
    `;
};
