import Home from "./pages/Home/home.js";
import NotFound from "./pages/NotFound.js";

const router = async () => {
    const routes = [
        {path: "/", view: Home},
    ]

    const pageMatches = routes.map((route) => {
        return {
            route, // route: route
            isMatch: route.path === location.pathname,
        };
    });
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

    if (!match) {
        match = {
            route: location.pathname,
            isMatch: true,
        };
        const page = new NotFound();
        document.querySelector("#root").innerHTML = await page.getHtml();
    } else {
        const page = new match.route.view();
        document.querySelector("#root").innerHTML = await page.getHtml();
    }
};
console.log("hi")

window.addEventListener("popstate", () => {
    router();
})
// new App({ $target: document.querySelector('.App') });
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router();
        }
    });
    router();
});