/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "deplos",
        links: {
            figma: "1198393124994627983",
            live: "deplos.github.io",
            github: "Deplos/deplos.github.io"
        },
        techs: ["pug", "stylus", "node"],
        hasImage: true,
    },
    {
        id: "pixel-battle",
        links: {
            live: "pixelbattle.fun",
            github: "pixelate-it/pixelbattle-frontend",
        },
        techs: ["preact", "css", "pixijs", "ts"],
        hasImage: true
    },
    {
        id: "feedrum",
        links: {
            github: "Feedrum-Project/feedrum-next",
            figma: "1314605686829534158"
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
            github: "/EliasDevis.github.io",
            live: "eliasdevis.github.io"
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
