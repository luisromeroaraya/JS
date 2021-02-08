/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var loop = true;
    var age;
    var sexe;
    var ville;
    while (loop) {
        age = prompt("Quel âge as tu ? ");
        sexe = prompt("Quel genre es-tu ?");
        ville = prompt("De quelle ville es-tu ?");
        if (confirm("Tu as " + age + " ans, " + "tu es " + sexe + " et tu viens de/du " + ville + ". Est-ce que c'est correct ?")) {
            loop=false;            
        }
    }
})();
