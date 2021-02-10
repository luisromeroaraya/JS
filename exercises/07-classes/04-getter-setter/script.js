/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        getName() {
            return (this.firstname+" "+this.lastname);
        }

        setName(newName) {
            this.firstname = (newName.split(" "))[0];
            this.lastname = (newName.split(" "))[1];
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        const person = new Person(prompt("Please enter your First Name:"),prompt("Please enter your Last Name:"));
        console.log(person.getName());
        person.setName(prompt("Please enter a new Full Name:"));
        console.log(person.getName());
    });

})();
