function randombg(){
  var random= Math.floor(Math.random() * 4) + 0;
  var bigSize = ["url('bg0.png')",
                 "url('bg1.png')",
                 "url('bg2.png')",
                 "url('bg3.png')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}