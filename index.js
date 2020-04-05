// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (let i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result
}

function johnLennonFacts(facts) {
  var n = facts.length; //if let doesn't work with scope just try var
  while (n < 1) {
    facts[n] = facts[n] + "!!!";
    n--
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return love;
}



