let game = function () {
  let playerPT = 0;
  let systemPT = 0;

  let startGame = function () {
    let startBTN = document.querySelector(".start button");
    let startSCN = document.querySelector(".start");
    let vs = document.querySelector(".vs");

    startBTN.addEventListener("click", function () {
      startSCN.classList.add("gameout");
      vs.classList.add("gamein");
      vs.classList.remove("gameout");
    });
  };

  let playvs = function () {
    let check = document.querySelectorAll(".check button");
    let launch = document.querySelectorAll(".launch img");
    let playerHand = document.querySelector(".player_game");
    let systemHand = document.querySelector(".system_game");

    let systemCheck = ["rock", "paper", "scissors"];

    check.forEach((opt1) => {
      opt1.addEventListener("click", function () {
        let systemNumber = Math.floor(Math.random() * 3);
        let systemChoice = systemCheck[systemNumber];

        setTimeout(() => {
          compareLaunch(this.textContent, systemChoice);
          playerHand.src = `${this.textContent}.png`;
          systemHand.src = `${systemChoice}.png`;
        }, 500);
      });
    });
  };

  let compareLaunch = (playerChoice, systemChoice) => {
    let ps_win = document.querySelector(".ps_win");

    if (playerChoice === systemChoice) {
      ps_win.textContent = "Draw";
      return;
    }
    if (playerChoice === "rock") {
      if (systemChoice === "scissors") {
        ps_win.textContent = "Player wins!";
        playerPT++;
        endGame();
        updateScore();
        return;
      } else {
        ps_win.textContent = "System wins!";
        systemPT++;
        endGame();
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (systemChoice === "scissors") {
        ps_win.textContent = "System wins!";
        systemPT++;
        endGame();
        updateScore();
        return;
      } else {
        ps_win.textContent = "Player wins!";
        playerPT++;
        endGame();
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (systemChoice === "rock") {
        ps_win.textContent = "System wins!";
        systemPT++;
        endGame();
        updateScore();
        return;
      } else {
        ps_win.textContent = "Player wins!";
        playerPT++;
        endGame();
        updateScore();
        return;
      }
    }
  };
  updateScore = function () {
    playerScore = document.querySelector(".player_pt p");
    systemScore = document.querySelector(".system_pt p");
    playerScore.textContent = playerPT;
    systemScore.textContent = systemPT;
  };

  restartGame = () => {
    reStart = document.querySelector(".winend button");
    reStart.addEventListener("click", () => {
      window.location.reload();
    });
  };
  restartGame();

  endGame = () => {
    winend = document.querySelector(".winend");
    vs = document.querySelector(".vs");
    winstop = document.querySelector(".winstop");

    if (playerPT === 5) {
      vs.classList.remove("gamein");
      vs.classList.add("gameout");
      setTimeout(() => {
        winend.classList.add(".gamein");
        winend.classList.remove("gameout");
        winstop.textContent = "Player Won!";
      }, 1000);
    } else if (systemPT === 5) {
      vs.classList.remove("gamein");
      vs.classList.add("gameout");
      setTimeout(() => {
        winend.classList.add("gamein");
        winend.classList.remove("gameout");
        winstop.textContent = "system Won!";
      }, 1000);
    }
  };

  startGame();
  playvs();
};

game();
