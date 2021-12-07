/* eslint-disable no-undef, no-unused-vars */

var msg;
var username;
var w = window.innerWidth;
var h = window.innerHeight;
var res = "";
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
var filepath = dir + '/data/backupchat.txt';
var writer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  writer = createWriter(filepath);
  username = createInput('');
  msg = createElement('textarea');
  buttonSend = createButton("Send");
  chat = createElement('textarea');

  chat.attribute('disabled', '');
  chat.position(40, h/2 - 20)
  chat.size(w-90, h/3 + 60);

  drawLabels();
  username.position(40, 50);
  username.size(w-90, 15);

  msg.position(40, 100);
  msg.size(w-90, h/5);

  buttonSend.position(40, h/3 + 30);
  buttonSend.size(w/5, 50);
  buttonSend.mouseClicked(send);

  // TODO : LECTURE
  res = loadStrings(filepath);
}



function drawLabels(num){
  fill(224, 224, 224);
  text("Message :", 40, 90);
  if(num == 1){
    fill(198, 136, 42);
    text("Username :", 40, 40);
  }
  else{
    text("Username :", 40, 40)
  }
  fill(224, 224, 224);
}


function send(){
  let error = 0;
  clear()
  if(username.value() != ""){
    res = username.value() +"> "+ msg.value() + "\n" + res;

    // TODO : ECRITURE
    writer.write(res);
    //writer.close();

    msg.value("")
  }
  else{ // No username
    error = 1;
  }
  chat.value(res)
  //chat.style('scrollTop :', 'scrollHeight');
  //text(String(res), 40, h/2);
  drawLabels(error);
}
