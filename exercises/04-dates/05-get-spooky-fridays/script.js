/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        var year = parseInt(document.getElementById("year").value);
        var date = new Date(year+"-01"+"-01");
        var months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
        let spookyfridays = [];
        while (date.getFullYear() < year+1) {
            if (date.getDay() == 5 && date.getDate() == 13) {
                spookyfridays.push(months[date.getMonth()]);
            }
            date.setDate(date.getDate()+1);
        }
        alert("Chaque mois qui contiendra un vendredi 13 pour l'année "+year+": "+spookyfridays);
        
    });
})();
