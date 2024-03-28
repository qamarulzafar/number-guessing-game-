#! /usr/bin/env node
import inquirer from 'inquirer'

let number = Math.floor(Math.random()*10)


const num = await inquirer.prompt ([
    {
    name: "userGuassedNumber",
    type: "number",
    message: "please guess a number"
}
])


if(num.userGuassedNumber == number){
    console.log("congragulation , you guess a right number")
}else{
    console.log("you guess a wrong number")
}