/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "deplos",
        links: {
            figma: "1198393124994627983",
            live: "deplos.com"
        },
        techs: ["pug", "stylus", "node"],
        hasImage: true,
    },
    {
        id: "feedrum",
        links: {
            github: "Feedrum-Project/feedrum-next",
            live: "feedrum.com"
        },
        techs: ["node", "next", "react", "zod"],
        hasImage: true,
    },
    {
        id: "chertnodes",
        links: {
            figma: "1149829028455305659",
        },
        techs: ["python", "flask", "scss"],
        hasImage: true,
    },
    {
        id: "protectx",
        techs: ["react", "node", "discordJs"],
        links: {
            figma: "1168662007492356291",
        },
        hasImage: true,
    },
    {
        id: "khanswers",
        techs: ["express", "node", "ejs"],
        links: {
            live: "khanswers.vercel.app",
            github: "/kahoot-answers",
        },
        hasImage: true,
    },
    {
        id: "kotikbot",
        techs: ["html", "css", "js"],
        links: {
            live: "kotikbot.github.io",
            github: "kotikbot/kotikbot.github.io",
        },
        hasImage: true,
    },
    {
        id: "portfolio",
        techs: ["js", "sass", "webpack"],
        links: {
            figma: "1164933568884615740",
            github: "/portfolio",
        },
        hasImage: true,
    },

    {
        id: "discordbot",
        techs: ["ts", "discordJs", "node"],
        links: {
            github: "/bot-template",
        },
        isSmall: true,
    },
    {
        id: "chesspro",
        techs: ["figma"],
        links: {
            figma: "1148344443083977909",
        },
        isSmall: true,
    },
    {
        id: "madhost",
        techs: ["pug", "less", "gulp", "node"],
        links: {
            live: "madhost.pw",
        },
        hasImage: true,
    },
];

export default projects;
