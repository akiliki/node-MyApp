console.log("Si traemos un proyecto desde GIT tenemos que hacer npm install para descargarnos las dependecias")


const math = require("./math")
const greet = require("./grettings")
const hello = require("./grettings/hello")
const cowsay = require("cowsay")

console.log(math.add(1, 122121))
console.log(math.divide(1, 122121))
console.log(math.substract(1, 122121))
console.log(math.multiply(1, 122121))


console.log(greet.greet("Aitor"))

console.log(hello.sayHello("Aitor"))

console.log(cowsay.say({
                    text: "Kaixo Aitor",
                    e: "o0",
                    T: "A"
                })
            )