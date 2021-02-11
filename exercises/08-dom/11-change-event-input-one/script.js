/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("pass-one").addEventListener("keyup", () => {
        passone = document.getElementById("pass-one");
        passonetext = passone.value;
        length = passonetext.length;
        document.getElementById("counter").innerHTML = length+"/10";
        if (length >= 10) {
            passone.setAttribute("onkeypress", "return false;");
        }
        else {
            passone.removeAttribute("onkeypress");
        }
    });
})();
