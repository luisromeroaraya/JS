/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        var dob = new Date(document.getElementById("dob-year").value, document.getElementById("dob-month").value-1, document.getElementById("dob-day").value)
        var today = new Date();
        var age = (today - dob) / (60*60*24*1000) / 365.25;
        var days = (age-Math.floor(age))*365.25;
        alert("Vous avez: "+Math.floor(age)+" ans "+"et "+Math.floor(days)+" jour(s)."); 
    });
})();

