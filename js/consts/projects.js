const projects = [
    {
        name: "ChertNodes",
        id: "chertnodes",
        description: "Minecraft servers hosting",
        links: {
            live: "chernodes.ru",
        },
        techs: [23, 2, 9],
        hasImage: true,
    },
    {
        name: "ProtectX",
        id: "protectx",
        description: "Discord anti-crash bot",
        techs: [25, 12, 19, 26, 22],
        links: {
            cached: "protectx.com",
        },
        hasImage: true,
    },
    {
        name: "Kahoot Answers",
        id: "khanswers",
        description: "Get answers from kahoot quiz",
        techs: [25, 12, 10],
        links: {
            live: "khanswers.vercel.app",
            github: "eliasdev/khanswers",
        },
        hasImage: true,
    },
    {
        name: "Kotikbot",
        id: "kotikbot",
        description: "Multi-functional discord bot",
        techs: [6, 7, 1],
        links: {
            live: "kotikbot.github.io",
            github: "kotikbot/kotikbot.github.io",
        },
        hasImage: true,
    },
    {
        name: "This Portfolio",
        id: "portfolio",
        description: "My personal portfolio",
        techs: [8, 6, 1],
        links: {
            figma: "elias_dev/portfolio",
            github: "elias/portfolio",
        },
        hasImage: true,
    },
    {
        name: "My blog",
        id: "blog",
        description: "Front-end of my future blog website written in vue",
        techs: [20, 9],
        links: {
            github: "elias/my-blog",
        },
        isSmall: true,
        hasImage: true,
    },
    {
        name: "Discord Bot Boilerplate",
        id: "discordbot",
        description:
            "Start creating scalable discord.js bot with typescript in seconds",
        techs: [22, 12, 0],
        links: {
            github: "elias/bot-template",
        },
        isSmall: true,
    },
    {
        name: "Chess PRO",
        id: "chesspro",
        description: "Landing page about service for viewing chess tournaments",
        techs: [15],
        links: {
            figma: "elias_dev/portfolio",
        },
        isSmall: true,
    },
    {
        name: "Ooku",
        id: "ooku",
        description: "Link shortener with discord auth",
        techs: [2, 23],
        links: {
            live: "ooku.ga",
        },
        isSmall: true,
    },
];

export default projects;
