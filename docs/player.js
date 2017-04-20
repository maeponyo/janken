const GU = 0;
const CHOKI = 1;
const PA = 2;
let matches;
var ans;

matches = 1;

function action(oppornent){
  if(matches > 50){
    matches = 1;
  }
  matches = matches + 1;
  ans = GU;
  return ans;
}
