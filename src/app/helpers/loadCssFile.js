export default (pathName) => {
    const link = document.createElement("link")
    link.href = `/css/${pathName}.css`;
    link.rel = "stylesheet"
    
    document.head.appendChild(link)
}