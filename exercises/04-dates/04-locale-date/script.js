/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    var today = new Date();
    var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    var day = days[today.getDay()];
    var date = today.getDate();
    var months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
    var month = months[today.getMonth()];
    var year = today.getFullYear();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    document.getElementById("target").innerHTML=( day+" "+date+" "+month+" "+year+", "+hour+"h"+minutes);
})();
