let yourScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#result");

const yourScoreElement = document.querySelector(".your-score");
const computerScoreElement = document.querySelector(".computer-score");


choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
        console.log(msg.innerText);
    })
})

const playGame = (userChoice) => {
    let youWin = true;
    //Math.floor(Math.random() * 3);
    const computerChoice = generateCompChoice();
    if(userChoice === computerChoice){
       draw();
    }
 else{
     
    if(userChoice === "rock"){
        //scissors, paper
      youWin = computerChoice === "paper" ? false : true;
      updateMsg(youWin, userChoice, computerChoice);
    }
    else if(userChoice === "paper"){
        //rock, scissors
        youWin = computerChoice === "scissors" ? false : true;
        updateMsg(youWin, userChoice, computerChoice);
    }
    else{
        //rock, paper
        youWin = computerChoice === "rock" ? false : true;
        updateMsg(youWin, userChoice, computerChoice);
    }
}    
}

const generateCompChoice = () =>{
 const totalChoices = ["rock", "paper", "scissors"];
 const randomIndex = Math.floor(Math.random() * 3);
 return totalChoices[randomIndex];
}

function draw(){
    msg.textContent = "It's a tie!";
    msg.style.fontSize = "20px";
    msg.style.padding = "10px";
    msg.style.textAlign = "center";
    msg.style.backgroundColor = "yellow";
}

const updateMsg = (youWin, userChoice, computerChoice) => {
    if(youWin){
        msg.textContent = `You win! ${userChoice} beats ${computerChoice}`; 
        msg.style.fontSize = "20px";
        msg.style.textAlign = "center";
        msg.style.padding = "10px";
        msg.style.backgroundColor = "green";
        yourScore++;
        yourScoreElement.innerText = `${yourScore}`;
    } else{
        msg.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
        msg.style.fontSize = "20px";
        msg.style.textAlign = "center";
        msg.style.padding = "10px";
        msg.style.backgroundColor = "red";
        computerScore++;
        computerScoreElement.innerText = `${computerScore}`;
    }
}



