const defaultLocale = "en";

function setLocaleHander() {
    const options = document.querySelectorAll(".dropdown__option");
    const label = document.querySelector(".dropdown__label");

    options.forEach((option) => {
        if (option.innerHTML === localStorage.locale)
            [label.innerHTML, option.innerHTML] = [
                localStorage.locale,
                label.innerHTML,
            ];

        option.addEventListener("click", () => {
            localStorage.locale = option.innerHTML;

            window.location.reload();
        });
    });
}

async function getLocale() {
    const locale = localStorage.locale ?? defaultLocale;

    // Using Vite's dynamic import for JSON
    const localeModule = await import(`../../locales/${locale}.json`);
    return localeModule.default;
}

export default setLocaleHander;
export { getLocale };
