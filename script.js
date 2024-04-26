let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

let userscorepara=document.querySelector("#user-score")
let compscorepara=document.querySelector("#comp-score")

let gencomputerchoice=()=>{
    const option=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random() * 3);
    return option[randidx];
    //rock,paper,scissors
}

const draw=()=>{
    
    msg.innerText = ("Game Was Draw.Play Again");
    msg.style.backgroundColor="black";
}

const showwinner = (userwin,userchoice,compchoice) =>{
    if (userwin) {
        userScore++;
        userscorepara.innerText = userScore;
        
        msg.innerText = (`You Win! Your ${userchoice} beats ${compchoice}`);
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorepara.innerText = compScore;
        
        msg.innerText = (`You Lose.Comp ${compchoice} beats ${userchoice}`);
        msg.style.backgroundColor="Red";
    }
}

let playgame = (userchoice)=>{
    
    //generate computer choice
    const compchoice = gencomputerchoice();


    if (userchoice == compchoice) {
        draw();
    } else {
         let userwin = true;
         if (userchoice == "rock") {
            userwin=compchoice == "paper" ? false : true;
         } else if (userchoice == "paper") {
            userwin=compchoice == "scissors" ? false : true;
         }else{
            userwin=compchoice == "rock" ? false : true;
         }
         showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});