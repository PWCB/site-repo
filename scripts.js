function randombg(){
  var random= Math.floor(Math.random() * 4) + 0;
  var bigSize = ["url('https://i.imgur.com/cQBz64F.png')",
                 "url('https://i.imgur.com/YEtCxH4.jpg')",
                 "url('https://i.imgur.com/x8B9VDQ.png')",
                 "url('https://i.imgur.com/NJa7ixC.png')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}