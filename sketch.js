const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var player
let engine, world;
var pared1, pared2, pared3, pared4, pared5, pared6, pared7, pared8, pared9, pared10, pared11, pared12;
var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14;
var bg_img, img_player;

function preload(){
  bg_img = loadImage('fondoa.png');  
  img_player = loadImage('play.jpg');
}

function setup() {
  createCanvas(1400,700);
  frameRate(80);


  engine = Engine.create();
  world = engine.world;  

  player = createSprite(60,620,10,10);
  player.addImage(img_player);
  player.scale=0.04;


  pared1 = createSprite(50, 760, 785, 10);
  pared2 = createSprite(20, 600, 500, 10);
  pared3 = createSprite(1320, 600, 470, 10);
  pared4 = createSprite(1175, 760, 520, 10);

  pared5 = createSprite(200, 300, 10, 550);
  pared6 = createSprite(200, 300, 10, 550);
  pared7 = createSprite(200, 300, 10, 550);
  pared8 = createSprite(200, 300, 10, 550);
  pared9 = createSprite(200, 300, 10, 550);
  pared10 = createSprite(200, 300, 10, 550);
  pared11 = createSprite(200, 300, 10, 550);
  pared12 = createSprite(200, 300, 10, 550);
  edges = createEdgeSprites();

  //paredes de la "a".
  a1 = createSprite(100, 670, 570, 10);
  a2 = createSprite(100, 550, 450, 10);
  a3 = createSprite(1350, 660, 500, 10);
  a4 = createSprite(1350, 550, 400, 10);
  a5 = createSprite(730, 530, 630, 10);
  a6 = createSprite(725, 415, 350, 10);
  a7 = createSprite(720, 120, 500, 10);
  a8 = createSprite(720, 210, 150, 10);
  a9 = createSprite(940, 130, 10, 30);
  a91 = createSprite(950, 160, 10, 30);
  a92 = createSprite(965, 190, 10, 30);
  a93 = createSprite(975, 210, 10, 30);
  a94 = createSprite(985, 230, 10, 30);
  a95 = createSprite(995, 250, 10, 30);
  a96 = createSprite(1010, 270, 10, 30);
  a97 = createSprite(1025, 300, 10, 30);
  a98 = createSprite(1035, 320, 10, 30);
  a99 = createSprite(1045, 340, 10, 30);
  a991 = createSprite(1060, 360, 10, 30);
  a992 = createSprite(1075, 390, 10, 30);
  a993 = createSprite(1090, 420, 10, 30);
  a994 = createSprite(1100, 450, 10, 30);
  a995 = createSprite(1115, 470, 10, 30);
  a996 = createSprite(1125, 500, 10, 30);
  a997 = createSprite(1145, 520, 10, 30);
  a998 = createSprite(1165, 540, 10, 30);
  a10 = createSprite(800, 230, 10, 50);
  b9 = createSprite(500, 130, 10, 30);
  b91 = createSprite(490, 160, 10, 30);
  b92 = createSprite(480, 190, 10, 30);
  b93 = createSprite(470, 210, 10, 30);
  b94 = createSprite(460, 230, 10, 30);
  b95 = createSprite(450, 250, 10, 30);
  b96 = createSprite(440, 270, 10, 30);
  b97 = createSprite(430, 300, 10, 30);
  b98 = createSprite(420, 320, 10, 30);
  b99 = createSprite(410, 340, 10, 30);
  b991 = createSprite(400, 360, 10, 30);
  b992 = createSprite(390, 390, 10, 30);
  b993 = createSprite(380, 420, 10, 30);
  b994 = createSprite(370, 450, 10, 30);
  b995 = createSprite(350, 470, 10, 30);
  b996 = createSprite(340, 500, 10, 30);
  b997 = createSprite(330, 520, 10, 30);
  b998 = createSprite(1165, 540, 10, 30);
  c94 = createSprite(800, 230, 10, 30);
  c95 = createSprite(805, 250, 10, 30);
  c96 = createSprite(812, 270, 10, 30);
  c97 = createSprite(825, 295, 10, 30);
  c98 = createSprite(835, 315, 10, 30);
  c99 = createSprite(850, 340, 10, 30);
  c991 = createSprite(860, 360, 10, 30);
  c992 = createSprite(875, 390, 10, 30);
  c993 = createSprite(885, 410, 10, 30);
  d91 = createSprite(645, 220, 10, 30);
  d92 = createSprite(640, 235, 10, 30);
  d93 = createSprite(635, 250, 10, 30);
  d94 = createSprite(625, 270, 10, 30);
  d95 = createSprite(615, 285, 10, 30);
  d96 = createSprite(610, 300, 10, 30);
  d97 = createSprite(600, 320, 10, 30);
  d98 = createSprite(590, 340, 10, 30);
  d99 = createSprite(580, 360, 10, 30);
  d991 = createSprite(570, 380, 10, 30);
  d992 = createSprite(560, 395, 10, 30);
  d993 = createSprite(380, 420, 10, 30);
  e91 = createSprite(420, 550, 10, 30);
  e92 = createSprite(410, 565, 10, 30);
  e93 = createSprite(400, 585, 10, 30);
  e94 = createSprite(390, 610, 10, 30);
  e95 = createSprite(380, 635, 10, 30);
  e96 = createSprite(370, 650, 10, 30);
  f9 = createSprite(1045, 550, 10, 30);
  f91 = createSprite(1050, 570, 10, 30);
  f92 = createSprite(1065, 595, 10, 30);
  f93 = createSprite(1075, 615, 10, 30);
  f94 = createSprite(1085, 635, 10, 30);
  f95 = createSprite(1095, 650, 10, 30);
   //invisibles
   a1.visible=false;
  a2.visible=false;
  a3.visible=false;
  a4.visible=false;
  a5.visible=false;
  a6.visible=false;
  a7.visible=false;
  a8.visible=false;
  a9.visible=false;
  a91.visible=false;
  a92.visible=false;
  a93.visible=false;
  a94.visible=false;
  a95.visible=false;
  a96.visible=false;
  a97.visible=false;
  a98.visible=false;
  a99.visible=false;
  a991.visible=false;
  a992.visible=false;
  a993.visible=false;
  a994.visible=false;
  a995.visible=false;
  a996.visible=false;
  a997.visible=false;
  a998.visible=false;
  a10.visible=false;
  b9.visible=false;
  b91.visible=false;
  b92.visible=false;
  b93.visible=false;
  b94.visible=false;
  b95.visible=false;
  b96.visible=false;
  b97.visible=false;
  b98.visible=false;
  b99.visible=false;
  b991.visible=false;
  b992.visible=false;
  b993.visible=false;
  b994.visible=false;
  b995.visible=false;
  b996.visible=false;
  b997.visible=false;
  b998.visible=false;
  c94.visible=false;
  c95.visible=false;
  c96.visible=false;
  c97.visible=false;
  c98.visible=false;
  c99.visible=false;
  c991.visible=false;
  c992.visible=false;
  c993.visible=false;
  d91.visible=false;
  d92.visible=false;
  d93.visible=false;
  d94.visible=false;
  d95.visible=false;
  d96.visible=false;
  d97.visible=false;
  d98.visible=false;
  d99.visible=false;
  d991.visible=false;
  d992.visible=false;
  d993.visible=false;
  e91.visible=false;
  e92.visible=false;
  e93.visible=false;
  e94.visible=false;
  e95.visible=false;
  e96.visible=false;
  f9.visible=false;
  f91.visible=false;
  f92.visible=false;
  f93.visible=false;
  f94.visible=false;
  f95.visible=false;

}

function draw() {
  background(51);
  image(bg_img,0,0,displayWidth+80,displayHeight);

  if(keyDown(UP_ARROW)) {
    player.y = player.y-10;
  }
  
  if(keyDown(LEFT_ARROW)) {
    player.x = player.x-10;
  }
  if(keyDown(DOWN_ARROW)) {
    player.y = player.y+10;
  }
  if(keyDown(RIGHT_ARROW)) {
    player.x = player.x+10;
  }

  player.collide(pared1);
  player.collide(edges);
  player.collide(edges[0]);
  player.collide(edges[2]);
  player.collide(a1);
  player.collide(a2);
  player.collide(a3);
  player.collide(a4);
  player.collide(a5);
  player.collide(a6);
  player.collide(a7);
  player.collide(a8);
  player.collide(a9);
  player.collide(a91);
  player.collide(a92);
  player.collide(a93);
  player.collide(a94);
  player.collide(a95);
  player.collide(a96);
  player.collide(a97);
  player.collide(a98);
  player.collide(a99);
  player.collide(a991);
  player.collide(a992);
  player.collide(a993);
  player.collide(a994);
  player.collide(a995);
  player.collide(a996);
  player.collide(a997);
  player.collide(a998);
  player.collide(b9);
  player.collide(b91);
  player.collide(b92);
  player.collide(b93);
  player.collide(b94);
  player.collide(b95);
  player.collide(b96);
  player.collide(b97);
  player.collide(b98);
  player.collide(b99);
  player.collide(b991);
  player.collide(b992);
  player.collide(b993);
  player.collide(b994);
  player.collide(b995);
  player.collide(b996);
  player.collide(b997);
  player.collide(b998);
  player.collide(c94);
  player.collide(c95);
  player.collide(c96);
  player.collide(c97);
  player.collide(c98);
  player.collide(c99);
  player.collide(c991);
  player.collide(c992);
  player.collide(c993);
  player.collide(d91);
  player.collide(d92);
  player.collide(d93);
  player.collide(d94);
  player.collide(d95);
  player.collide(d96);
  player.collide(d97);
  player.collide(d98);
  player.collide(d99);
  player.collide(d991);
  player.collide(d992);
  player.collide(d993);
  player.collide(e91);
  player.collide(e92);
  player.collide(e93);
  player.collide(e94);
  player.collide(e95);
  player.collide(e96);
  player.collide(f9);
  player.collide(f91);
  player.collide(f92);
  player.collide(f93);
  player.collide(f94);
  player.collide(f95);

  
 //paredes.show();
  Engine.update(engine);

  drawSprites();
}
