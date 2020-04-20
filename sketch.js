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

function draw() {
  background(bg);
  
  drawDiscs();
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