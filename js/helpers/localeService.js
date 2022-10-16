const localeNames = ["ru", "en", "ua"];



function setLocaleHander() {
    const options = document.querySelectorAll(".dropdown__option");
    const label = document.querySelector(".dropdown__label")

    options.forEach((option) =>
        option.addEventListener("click", (e) => {
            localStorage.locale = option.innerHTML
            let tmp = label.innerHTML
            label.innerHTML = option.innerHTML
            option.innerHTML = tmp
        })
    );
}


export default setLocaleHander
