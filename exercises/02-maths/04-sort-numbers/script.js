/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        var text = document.getElementById("numbers").value;
        let numbers = [];
        var number = "";
        var next = ",";
        for (i=0; i < text.length; i++) {            
            if (text[i] != next) {
                number = number + text[i];
            } else  {
                i=i+1;
                numbers.push(parseInt(number));
                number="";
            }
        }
        numbers.push(parseInt(number));

        let sorted = false;
        while(!sorted) {
            sorted = true;
            for(var i=0; i < numbers.length; i++) {
                if(numbers[i] < numbers[i-1]) {
                    let temp = numbers[i];
                    numbers[i] = numbers[i-1];
                    numbers[i-1] = temp;
                    sorted = false;
                }
            }
        }

        alert(numbers);

    });
})();
