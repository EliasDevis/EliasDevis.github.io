export default (pathName) => {
    document.getElementById("spa-css").href = `/css/pages/${pathName}.css`;
}