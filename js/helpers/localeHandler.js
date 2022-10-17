
function setLocaleHander() {
    const options = document.querySelectorAll(".dropdown__option");
    const label = document.querySelector(".dropdown__label");

    options.forEach((option) => {
        if (option.innerHTML === localStorage.locale) 
            [label.innerHTML, option.innerHTML] = [localStorage.locale, label.innerHTML]

        option.addEventListener("click", () => {
            localStorage.locale = option.innerHTML;

            [label.innerHTML, option.innerHTML] = [option.innerHTML, label.innerHTML]
        });
    });
}

export default setLocaleHander;
