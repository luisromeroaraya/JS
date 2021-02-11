/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("pass-one").addEventListener("keyup", () => {
        passonetext = document.getElementById("pass-one").value;
        length = passonetext.length;
        includes=0;
        for (i=0; i<length; i++){
            if (passonetext.includes(i)){
                includes = includes+1;
            }
        }
        if (length >= 8 && includes >= 2) {
            document.getElementById("validity").innerHTML = "ok";
        }
        else {
            document.getElementById("validity").innerHTML = "Pas ok";
        }
    });
})();
