// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (let i = 0; i < musicians.length(); i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
}

function johnLennonFacts(facts) {
  let n = facts.length(); //if let doesn't work with scope just try var
  while (n < 1) {
    facts[n] = facts[n] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles() {
  var love = [];
  
}



