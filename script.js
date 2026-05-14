let cells = document.querySelectorAll(".cell");
let rst_btn = document.querySelector("#rstbtn"); 
let player = true; //true for X and false for O
let new_game = document.querySelector("#Restart");
let winner = document.querySelector("#result");

const win_combinations = [
    [0,1,2],
    [0,3,6],
    [0,4,8], 
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],   
];
 
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        console.log("box was clicked");
       if(player) {
        cell.innerText = "X";
        cell.style.color = "red";
        player = false;
       } else {
        cell.innerText = "O";
        cell.style.color = "blue";
        player = true;
       }
       cell.disabled = true;
       checkWin();
    });
})
let checkWin = () => {
    for( let combination of win_combinations) {

let player1= cells[combination[0]].innerText;
let player2= cells[combination[1]].innerText;
let player3= cells[combination[2]].innerText;

if  (player1!== "" && player2!="" && player3!="") {
    if ( player1 === player2 && player2 === player3 && player1 === player3) {
    console.log("Winner", player1);
    showWinner(player1);
    }
         }
      }       
    }
const DisableAllCells = () => {
    cells.forEach((cell) => {
        cell.disabled = true;
    });
}
let showWinner = (winner_player) => {
    winner.innerText = `Player ${winner_player} wins!`;
    winner.classList.remove("hide");
    DisableAllCells();
}
 const EnableAllCells = () => {
    cells.forEach((cell) => {
        cell.disabled = false;
    });
}
const ResetGame = () => {
    cells.forEach((cell) => {
        cell.innerText = "";
    });
    EnableAllCells();
    winner.classList.add("hide");
}
rst_btn.addEventListener("click", ResetGame);
new_game.addEventListener("click", ResetGame);