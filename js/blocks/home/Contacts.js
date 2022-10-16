import media, { discordTag } from "../../consts/media.js";

const contacts = [
    {
        name: "discord",
        text: discordTag,
    },
    {
        name: "email",
        text: media.emailRaw,
    },
];

export default () => {
    return /*html*/ `
        <div class="contacts">
            <h2 class="h2">contacts</h2>
            <div class="contacts__content">
                <p class="contacts__description">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                <div class="contacts__media">
                    <h3 class="contacts__title">Message me here</h3>
                    <div class="contacts__list">
                        ${contacts
                            .map(
                                (contact) => /*html*/ `
                            <a class="contact" href="${media[contact.name]}">
                                <img src="/images/icons/${
                                    contact.name
                                }.svg" alt="">
                                <div class="contact__name">${contact.text}</div>
                            </a>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>

        </div>
    `;
};
