/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        passone = document.getElementById("pass-one");
        passtwo = document.getElementById("pass-two");
        passonetext = passone.value;
        passtwotext = passtwo.value;
        if (passonetext != passtwotext) {
            passone.setAttribute("class", "error");
            passtwo.setAttribute("class", "error");
        }
        else {
            passone.removeAttribute("class");
            passtwo.removeAttribute("class");
        }
    });
})();
