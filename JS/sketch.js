let width = 320;
let height = 320;
var bg;
let current_player;
// The board is 8 x 8 
// empty means neural position
let size = 8;
let board = [
  ['','','','','','','',''],  // bottom 8th row 
  ['','','','','','','',''],  // 7
  ['','','','','','','',''],  
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],  // 2
  ['','','','','','','','']   // top
];

function setup() {
  // import image
  bg = loadImage('background.jpg');

  createCanvas(width, height); 
  current_player = '1';
}
let result = 'draw';
function draw() {
  background(bg);
  
  drawDiscs();

  result = checkWinner();
  let checkerIfFull = true;
  for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
      if(board[i][j] == ''){
        checkerIfFull = false;
        break;
      }
    }
    if(!checkerIfFull) break;
  }

  if(result != 'draw'){
    console.log("Player ",result, " wins");
  }
  else{
    if(checkerIfFull) console.log('draw');
  }
}
function mousePressed(){ 
  let n = floor(mouseX / 40); // n be the side of the grid (0 <= n <= 7)
  console.log(n);

  addDisc(current_player,n);
}

function addDisc(player,n){
  // If player == 1 then red circle
  // Else yellow
  for(let i = 0; i < size; ++i){
    if(board[n][i] == ''){  
      // change players status since the move was legal
      if(current_player == '1'){
        current_player = '2';
      }else{
        current_player = '1'
      }

      if(player == '1'){
        board[n][i] = '1';
      }else{
        board[n][i] = '2';
      }
      break;
    }
  }
}
function drawDiscs(){ 
  for(let i = 0; i < size; ++i){
    for(let j = 0; j < size; ++j){
      let x = i * 40 + 20;
      let y = height - (j * 40 + 20);
      if(board[i][j] == '1'){
        fill(255,0,0);
        ellipse(x,y,35,35);
      }
      else if(board[i][j] == '2'){
        fill(255,204,0);
        ellipse(x,y,35,35);
      }
    }
  }
}
function checkWinner(){
  // First check vertically
  let check_four = 0; 
  for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){ 
      if(board[i][j] == '') check_four = 0;
      else if(board[i][j] == '1'){
        if(check_four >= 0) check_four++;
        else check_four = 0;
      }
      else{
        if(check_four > 0) check_four = 0;
        else check_four--;
      }

      if(check_four == 4){
        return '1';
      }
      else if(check_four == -4){
        return '2';
      } 
    }
  }
  // Check horizontally
  check_four = 0; 
  for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){ 
      if(board[j][i] == '') check_four = 0;
      else if(board[j][i] == '1'){
        if(check_four >= 0) check_four++;
        else check_four = 0;
      }
      else{
        if(check_four > 0) check_four = 0;
        else check_four--;
      }

      if(check_four == 4){
        return '1';
      }
      else if(check_four == -4){
        return '2';
      } 
    }
  }

  // check right diagonally
  for(let i = 0; i < size - 3; i++){
    for(let j = 0; j < size - 3; j++){
        if(board[i][j] == board[i+1][j+1] && 
          board[i][j] == board[i+2][j+2] && 
          board[i][j] == board[i+3][j+3]){
          if(board[i][j] == '1') return '1';
          else if(board[i][j] == '2') return '2';
        }
    }
  }

  // check left diagonally
  for(let i = 3; i < size; i++){
    for(let j = size - 1; j >= 3; j--){
      if(board[i][j] == board[i-1][j-1] && 
                        board[i][j] == board[i-2][j-2] &&
                        board[i][j] == board[i-3][j-3]){

        if(board[i][j] == '1') return '1';
        else if(board[i][j] == '2') return '2';
      }
    }
  }
  return 'draw';
}