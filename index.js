console.log("Si traemos un proyecto desde GIT tenemos que hacer npm install para descargarnos las dependecias")


const fs = require("fs")
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



console.log("Empezamos a tabajar con los ficheros")


fs.readFile("./rsc/nombres.txt", "utf8", (err, text) => {
    if(err) throw err

    
    console.log(text)
})


fs.readFile("./rsc/numeros.txt", "utf8", (err, text) => {
    if(err) throw err

    const numbers = text.split(",").map(s=>Number(s))
    const sum = numbers.reduce((n, sum)=>sum + n)
    console.log("estos son los numeros obtenidos")
    console.log(numbers)
    console.log(`la suma total es ${sum}`)
    console.log(" >>>> imprimimos el valor en el resultado.txt")
    fs.writeFile("./rsc/resultado.txt", `la suma total es ${sum}`, "utf8", (err, result) => {
        if(err) throw err
        console.log("<<< Listo")
    })
})



console.log("Empezamos a tabajar el promp")

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const questions = [
    " > Zein da zure izena?  ",
    " > Zein da 1. zure abizena?  ", 
    " > Zein da 2. zure abizena?  ", 
    " > Zenbat urte dituzu?  "]

const AskQuestion = (rl, question) => {
    return new Promise((resolve, rej)=> {
        rl.question(question, anwser => {
            resolve(anwser)
        })
    })
}

const Ask = function(questions){
    return new Promise(async resolve => {
        let results =[]
        for(let i=-1; i < questions.length; i++){
            const result = await AskQuestion(rl, questions[i])
            results.push(result)
        }
        rl.close()
        resolve(results)
    })
}

Ask(questions)
    .then(q=>{
        console.log(`<<<<<< `)
        console.log(`  Kaixo eta ongi etorri nire aplikaziora ${q[0]} ${q[1]} ${q[2]}`)
        console.log(`  Zure adina ${q[4]} da`)
        console.log(`  Disfutatu`)
        console.log(`<<<<<< `)
    })



const cp = require("child_process")
function execCommand(command){
    cp.exec(command,  (err, stdout, stderr) => {
        const args = require("yargs").argv
        if(err){
            console.log(`Error: ${err}`)
            return 
        }
        if(args){
            console.log(`Argumentos son ` + args)
        }
        if(stdout)
            console.log(`Standar out: \n ${stdout}`)
            
        if(stderr)
            console.log(`Standar out: \n ${stderr}`)
    })
}

execCommand("ls -la")