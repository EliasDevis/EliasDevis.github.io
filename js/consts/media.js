import websites from "./websites.js"

const media = {
    discord: "914240860101681163",
    github: "EliasDevis",
    figma: "elias_dev",
    replit: "EliasDev",
    stackOverflow: "19758208/elias",
    codewars: "EliasDevis",
    devTo: "eliasdevis",
    cssBattle: "elias_dev",
    codepen: "elias_dev",
    dribble: "Elias_dev",
}

const proxy = {
    get(target, name) {
        if (name === "emailRaw") 
            return target.email

        return `${websites[name] ?? ""}${target[name]}`
    }
}

export default new Proxy(media, proxy);
export const discordTag = "!Elias#3519"

