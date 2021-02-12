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
    var i = 20;
    var sense = "up";
    target = document.getElementById("target");
    setInterval(function(){
        console.log(i);
        if (i==26) {
            sense = "down";
        }
        if (i==20) {
            sense = "up";
        }
        if (sense == "up") {
            i = i + 1;
        }
        if (sense == "down") {
            i = i - 1;
        }
        target.setAttribute("style","font-size: "+i+"px;")
    },120);
})();
