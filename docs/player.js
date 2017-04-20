const GU = 0;
const CHOKI = 1;
const PA = 2;
let matches;
var ans;

matches = 0;

function action(oppornent){
  if(matches > 100){
    matches = 0;
  }
  matches = matches + 2;
  ans = matches % 4;
  return ans;
}
