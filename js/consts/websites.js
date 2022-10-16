const websites = {
    discord: "discord.com/users/",
    github: "github.com/",
    figma: "figma.com/@",
    replit: "replit.com/@",
    stackOverflow: "stackoverflow.com/users/",
    codewars: "codewars.com/users/",
    devTo: "dev.to/",
    cssBattle: "cssbattle.dev/player/",
    codepen: "codepen.io/",
    dribble: "dribbble.com/",
}

const proxy = {
    get(target, name) {
        return `https://${target[name]}`
    }
}

export default new Proxy(websites, proxy)