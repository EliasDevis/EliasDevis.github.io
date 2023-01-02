import Footer from "@/components/Footer.js";
import Header from "@/components/Header.js";
import { getLocale } from "@/helpers/localeHandler.js";

export default async (content, path) => {
    const locale = await getLocale()

    return /*html*/ `
        ${Header(locale.header)}
        <div class="container content">
            ${content(locale.pages[path.name], locale)}
        </div>
        ${Footer(locale.footer)}
    `;
};
