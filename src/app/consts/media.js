import proxy from "../proxies/media"

const media = {
    discord: {
        id: "914240860101681163",
        tag: "!Elias#3519",
    },
    stackOverflow: {
        id: "19758208",
        name: "elias",
    },
    github: "EliasDevis",
    figma: "elias_dev",
    replit: "EliasDev",
    codewars: "EliasDevis",
    devTo: "eliasdevis",
    cssBattle: "elias_dev",
    codepen: "elias_dev",
    dribble: "Elias_dev",
    email: "elias@elias-dev.ml"
}

export default new Proxy(media, proxy);

