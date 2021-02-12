/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var image = document.getElementsByTagName("IMG")[0];
    var src = image.getAttribute("src");
    var hover = image.getAttribute("data-hover");
    image.addEventListener("mouseover", () => {
        image.setAttribute("src", hover);
    });
    image.addEventListener("mouseout", () => {
        image.setAttribute("src", src);
    });
})();
