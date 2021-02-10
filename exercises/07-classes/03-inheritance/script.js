/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Miaow";
    }

    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Wouf";
    }


    document.getElementById("run").addEventListener("click", () => {
        const perro = new Dog(prompt("Please enter your dog's Name:"));
        const gato = new Cat(prompt("Please enter your cat's Name:"));
        console.log(perro.sayHello());
        console.log(gato.sayHello());
    });

})();
