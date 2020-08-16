var headImage;
var nextSpi;

function setup() 
{
  createCanvas(350, 700); 

  sprite1 = createSprite(175, 107, 342, 213);
  SignUpSpi = createSprite(175, 300, 121.5, 62.5);
  LoginSpi = createSprite(175, 400, 121.5, 62.5);
  nextSpi = createSprite(1000000000, 400, 100, 30);
  pointer = createSprite(mouseX, mouseY, 1, 1);
  pointer.visible = false;
  

  headImage = loadImage("EZAddressHead.PNG");
  Signup = loadImage("SignUp.PNG");
  Login = loadImage("login.PNG");
  next = loadImage("NextIcon.PNG");

  headImage.width = 342;
  headImage.height = 213;
  sprite1.addImage("fdsf", headImage);
  sprite1.scale = 0.5;
  headImage.debug = true;

  SignUpSpi.addImage("sacd", Signup);
  LoginSpi.addImage("ghjkl", Login);
  nextSpi.addImage("fghj", next);
  nextSpi.scale = 0.3;
  LoginSpi.scale = 0.5;
  SignUpSpi.scale = 0.5;

  array = [];

}

function draw() 
{
  background(255);

  pointer.x = mouseX;
  pointer.y = mouseY;

  if(mousePressedOver(SignUpSpi))
  {

    SignUpSpi.x = 1000000;
    LoginSpi.x = 1000000;
    form = new Form1();
    form.display();
    nextSpi.x = 175;

  } 
  
  if(mousePressedOver(nextSpi))
  {
    form.step2();
    //nextSpi.x = 100000000;
  } 

  if(pointer.isTouching(LoginSpi))
  {
    LoginSpi.scale = 0.53;
  }
  else if(LoginSpi.scale === 0.53)
  {
    LoginSpi.scale = 0.5;
  }

  if(pointer.isTouching(SignUpSpi))
  {
    SignUpSpi.scale = 0.53;
  }
  else if(SignUpSpi.scale === 0.53)
  {
    SignUpSpi.scale = 0.5;
  }
  
  if(pointer.isTouching(nextSpi))
  {
    nextSpi.scale = 0.33;
  }
  else if(nextSpi.scale === 0.33)
  {
    nextSpi.scale = 0.3;
  }

  drawSprites();
}