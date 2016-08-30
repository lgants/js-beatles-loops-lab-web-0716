function theBeatlesPlay(musicians ,instruments){
  var result = [];
  for (var i=0; i < instruments.length; i++){
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}

function johnLennonFacts(facts){
  var n = 0;
  while (n < facts.length){
    facts[n] = facts[n] + "!!!";
    n++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var result = [];
  var n = 0;
  do {
    result.push("I love the Beatles!");
    n++;
  } while (num < 15 && n <= num);
  return result;
}
