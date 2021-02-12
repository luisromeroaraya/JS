/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    (() => {
        srcImg = (img) => img.setAttribute("src", src);
        hoverImg = (img) => img.setAttribute("src", hover);
        var image = document.getElementsByTagName("IMG")[0];
        src = image.getAttribute("src");
        hover = image.getAttribute("data-hover");
        image.setAttribute("onmouseout", "srcImg(this)");
        image.setAttribute("onmouseover", "hoverImg(this)");
    })();
})();
