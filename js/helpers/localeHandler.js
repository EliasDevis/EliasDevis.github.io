const defaultLocale = "en"


function setLocaleHander() {
    const options = document.querySelectorAll(".dropdown__option");
    const label = document.querySelector(".dropdown__label");

    options.forEach((option) => {
        if (option.innerHTML === localStorage.locale) 
            [label.innerHTML, option.innerHTML] = [localStorage.locale, label.innerHTML]

        option.addEventListener("click", () => {
            localStorage.locale = option.innerHTML;

            window.location.reload();
        });
    });
}

async function getLocale() {
    const locale = localStorage.locale ?? defaultLocale

    return fetch(`/locales/${locale}.json`).then(res => res.json())
}

export default setLocaleHander;
export { getLocale }
