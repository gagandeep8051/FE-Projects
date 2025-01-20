let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newgame");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");

let turnO = true;  

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      box.style.color ="red";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color="blue";
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};

const game = () => {
  resetGame();
};

newbtn.addEventListener("click", game);
resetbtn.addEventListener("click", resetGame);  
