
// From https://github.com/rafgraph/spa-github-pages
export default async () => {
    const l = window.location;

    if (l.search[1] === "/") {
        let decoded = l.search
            .slice(1)
            .split("&")
            .map((s) => s.replace(/~and~/g, "&"))
            .join("?");

        window.history.replaceState(
            null,
            null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
    }
}