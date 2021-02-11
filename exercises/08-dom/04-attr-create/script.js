/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var source = document.getElementById("source");
    var value = source.getAttributeNode("data-image").value;
    var image = document.createElement("img");
    image.src = value;
    var target = document.getElementById("target");
    target.appendChild(image);
    source.attributes.removeNamedItem("data-image");

})();
