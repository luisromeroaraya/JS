/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
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
            passone.setAttribute("style", "border-color: red;");
            passtwo.setAttribute("style", "border-color: red;");
        }
        else{
            passone.removeAttribute("style");
            passtwo.removeAttribute("style");
        }
    });
})();