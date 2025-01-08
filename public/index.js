const computer = document.querySelector(".computerImage img");
const player = document.querySelector(".playerImage img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");

options.forEach(option => {
    option.addEventListener("click", () => { 
        computer.classList.add("shakeComputer");
        player.classList.add("shakePlayer");
        
        setTimeout(() => {
            computer.classList.remove("shakeComputer");
            player.classList.remove("shakePlayer");
        }, 800);
        
        const choice = option.innerText.toLowerCase(); 
        player.src = `/Assets/${choice}Player.png`; 

        const pcChoices = ["stone", "paper", "scissors"];
        let arrayNo = Math.floor(Math.random() * 3);
        const pcChoice = pcChoices[arrayNo];
        console.log("Computer chose:", pcChoice);
        computer.src = `/Assets/${pcChoice}Computer.png`;

        let cPoints = parseInt(computerPoints.innerHTML);
        let pPoints = parseInt(playerPoints.innerHTML);

        if (pcChoice === choice) {
            console.log("It's a tie!");
        } else if (
            (pcChoice === "paper" && choice === "stone") ||
            (pcChoice === "scissors" && choice === "paper") ||
            (pcChoice === "stone" && choice === "scissors")
        ) {
            cPoints += 1;
            console.log("Computer wins!");
        } else {
            pPoints += 1;
            console.log("Player wins!");
        }
        
        computerPoints.innerHTML = cPoints;
        playerPoints.innerHTML = pPoints;
    });
});