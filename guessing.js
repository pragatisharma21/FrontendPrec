const max = prompt("enter the maximum number:")

const random = Math.floor(Math.random() * max) + 1
let guess = prompt("guess the number")
while(true){
    if(guess == "quit"){
        console.log("user quiet")
        break;
    }
    else if(guess == "random"){
        console.log(" congrats !!! youre right")
        break;
    }else{
        guess = prompt("your guess was wrong please try again later")
    }
}
function sum(){
    console.log("pragati")
}
sum()
function multiplication(n){
    for(i=n; i<=10*n; i=i+n){
        console.log(i)
    }
}
multiplication(5)
function isadult(age){
    if(age>18){
        return "adult"
    }else{
        return "not adult"
    }

}
console.log(isadult(15))
str = ["hi", "hello", "bye", "!"]
function concat(str){
    let res = ""
    for(let i = 0; i<str.length; i++){
        res += str[i]
    }
    return res;
}
concat(str)