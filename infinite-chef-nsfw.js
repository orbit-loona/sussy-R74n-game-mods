if(window.location.hostname.startsWith("sandboxels")) {
  alert("This is an Infinite Chef mod. It will not work in Sandboxels.")
} else {
  ingredients.cum = {
    type: "liquid",
    color: [ "#d6d6cb" ],
    keywords: 'semen,sperm,jizz,spunk,nut,baby batter,cream',
    dishWeight: -55,
    adj: "cummy",
    "h": 60,
    "s": 12,
    "l": 82,
    "shape": "liquid"
  };

  ingredients.poop = {
    shape:"blob",
    type:"paste",
    color:["#5c3508"],
    h: 32,
    s: 84,
    l: 20,
    adj:"toxic",
    hidden:true,
    keywords: 'doo,poo,shit,crap,feces,scat,dung,number 2,#2'
  }
}
