var choices=document.querySelectorAll(".image");
var game1=document.querySelector("#play-game1");
var you=document.querySelector("#you");
var com=document.querySelector("#comp");
let userCount=0;
let computerCount=0;
const computerChoice=() =>{
    const option=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return option[index];
}
const draw=()=>{
    console.log("Draw the match")
}
const showresult=(user,userChoice,ComputerChoice)=>{
    if(user){
        userCount++;
        // console.log("User won");
        you.innerHTML=userCount;
        game1.innerHTML=`USER WON. user choose ${userChoice} , computer choose ${ComputerChoice}`;
        game1.style.backgroundColor="green";
    }
    else{
        computerCount++;
        // console.log("Computer won");
        com.innerHTML=computerCount;
        game1.innerHTML=`COMPUTER WON. user choose ${userChoice} , computer choose ${ComputerChoice}`;
        game1.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    // console.log("User Choice",userChoice);
    const ComputerChoice=computerChoice();
    // console.log("Computer choice ",ComputerChoice)
    if(userChoice===ComputerChoice){
        draw();
    }
    else{
    let user=true;
   if(userChoice==="rock")
   {
    //paper,scissors
    user=ComputerChoice==="paper"?false:true;
   }
   else if(userChoice==="paper"){
    //rock,scissors
    user=ComputerChoice==="scissors"?false:true
   }
   else{
    //rock,paper
    user=ComputerChoice=="rock"?false:true;
   }
   showresult(user,userChoice,ComputerChoice);
}}
for(let choice of choices){
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
}