/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var table = document.createElement("table");
    var target = document.getElementById("target");
    target.appendChild(table);
    var ul = document.createElement("ul");
    table.appendChild(ul);
    for (i=1; i<=10; i++) {
        var multiplication="";
        for (j=1; j<=10; j++) {
            var multiplication = multiplication+i+"x"+j+"="+(i*j)+" ";
        }
        var li = document.createElement("li");
        var text = document.createTextNode(multiplication);
        li.appendChild(text);
        ul.appendChild(li);
    }
})();
