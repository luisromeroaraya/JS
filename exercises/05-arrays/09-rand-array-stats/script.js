/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        numbers=[];
        var min=10, max=0, sum=0, med=0;
        for (i=0; i<10;i++){
            n=Math.floor((Math.random()*10)+1);
            numbers.push(n);
            if (n > max) {
                max=n;
            }
            if (n < min) {
                min=n;
            }
            sum=sum+n;
        }
        average=sum/10;
        for (i=0; i<10; i++){
            document.getElementById("n-"+(i+1)).innerHTML=numbers[i];
        }
        document.getElementById("min").innerHTML=min;
        document.getElementById("max").innerHTML=max;
        document.getElementById("sum").innerHTML=sum;
        document.getElementById("average").innerHTML=average;
    });
})();
