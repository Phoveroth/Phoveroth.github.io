var count = 0;
const texts = [];

function story() {
  const maintext = document.getElementById("maintext").children;
  const aa = maintext.item(0);
  const bb = aa.cloneNode(true);
  bb.setAttribute("id","s");
  bb.children.item(1).setAttribute("id","story" + count);
  document.getElementById("maintext").appendChild(bb);
  texts.push("s");
  count += 1;
};

function dialog() {
  const maintext = document.getElementById("maintext").children;
  const aa = maintext.item(1);
  const bb = aa.cloneNode(true);
  bb.setAttribute("id","d");
  bb.children.item(1).setAttribute("id",count + "dialog");
  bb.children.item(2).setAttribute("id","dialog" + count);
  document.getElementById("maintext").appendChild(bb);
  texts.push("d");
  count += 1;
};

function pesterchum() {
  const maintext = document.getElementById("maintext").children;
  const aa = maintext.item(2);
  const bb = aa.cloneNode(true);
  bb.setAttribute("id","p");
  bb.children.item(1).setAttribute("id",count + "pesterchum");
  bb.children.item(2).setAttribute("id","pesterchum" + count);
  document.getElementById("maintext").appendChild(bb);
  texts.push("p");
  count += 1;
};

function submit() {
  var final = document.getElementById("final");
  var gradient = document.getElementById("gradient");
  var border = document.getElementById("border");
  var scolor = document.getElementById("scolor");
  var width = document.getElementById("width");
  var title = document.getElementById("title");
  var sound = document.getElementById("sound");
  var sname = document.getElementById("sname");
  var image = document.getElementById("image");
  var next = document.getElementById("next");
  var nname = document.getElementById("nname");
  var goback = document.getElementById("goback");
  var preview = document.getElementById("preview");
  var x = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Vstuck</title><link rel='stylesheet' type='text/css' href='VSASTUCKMAIN.CSS'><style>";
  if (gradient.checked == true) {
    x = x + ".main{border: 5px solid transparent;background-color: #282828;width: 1100px;margin: auto;background: linear-gradient(#282828, #282828) padding-box,linear-gradient(to right, #" + border.value + ", #" + scolor.value + ") border-box;}"
  } else {
    x = x + ".main{border: 5px outset #" + border.value + ";background-color: #282828;width: 1100px;margin: auto;}"
  };
  x = x + ".upperarea{margin: auto;width: " + width.value + "px;}.grayarea{width: " + width.value + "px;margin: auto;background-color: #161616;}.photo{width: " + width.value + "px;display: block;margin-left: auto;margin-right: auto;}.textbox{width: 700px;margin: auto;}</style></head><body><div class='main'><h1>" + title.value + "</h1><div class='upperarea'>";
  if (sound.checked == true) {
    x = x + "<button id='audio-button'><audio id='audio-file' src='../Audio/" + sname.value + "'></audio>Play Audio</button>";
  };
  x = x + "<img class='photo' src='../Images/" + image.value + "' alt='Image could not be found' ></div><div class='grayarea'><br><div class='textbox'>";
  for (let i = 0; i < texts.length; i++) {
    if (texts[i] == "s") {
      var storyy = document.getElementById("story" + i);
      x = x + "<p class='storytext'>" + storyy.value + "</p>";
    } else if (texts[i] == "d") {
      var dialogg = document.getElementById(i + "dialog");
      var dialoggg = document.getElementById("dialog" + i);
      x = x + "<p class='speak " + dialogg.value + "'>" + dialoggg.value + "</p>";
    } else if (texts[i] == "p") {
      var pesterr = document.getElementById(i + "pesterchum");
      var pesterrr = document.getElementById("pesterchum" + i);
      if (pesterr.value == "info") {
        x = x + "<p class='chatpester'>" + pesterrr.value + "</p>"
      } else {
        x = x + "<p class='chat " + pesterr.value + "'>" + pesterrr.value + "</p>"
      };
    };
  };
  x = x + "<a href='" + next.value + "' class='next'>" + nname.value + "</a></div><br></div><br><a href='" + goback.value + "' class='goback'>Go Back</a></div><script>const button = document.querySelector('#audio-button');const audio = document.querySelector('#audio-file');button.addEventListener('click', function() {audio.currentTime = 0;audio.play();});</script></body></html>"
  preview.innerHTML = x;
  x = "<xmp>" + x + "</xmp>"
  final.innerHTML = x;
};