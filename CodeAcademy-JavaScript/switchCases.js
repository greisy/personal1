// Write your code below!
var age = prompt("How old are you?");
switch(true){
    case (age<10):
        console.log("you are so young, Hi!! ");
        break;
    case (age >=10 && age <=20):
        console.log("You are a teenager");
        break;
    case (age > 21):
        console.log("Ok, now we are talking about the same age");
        break;
    default:
        console.log("bye bye you don't entrace in any case");
        break;
    }