document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){
    console.log(event.target);

    let square = event.target;
    let position = square.id;

    if (handleMove(position)){
        let jogador = playerTime + 1;
        setTimeout(()=>{
            alert("O jogo acabou! O vencedor foi o jogador: " + jogador);
            newGame();
        },10)
        
        
    }
    updateSquare(position);
    
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
        
}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        } else if(square.firstChild != undefined){
            square.removeChild(square.firstChild)
        }
    })

}

function newGame(){
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    updateSquares();
}

