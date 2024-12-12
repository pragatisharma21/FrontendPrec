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