const GU = 0;
const CHOKI = 1;
const PA = 2;
let matches;
var ans;
var list;
var index;
var lastCard;

matches = 0;

// チョキ
function actionAgainstChoki(){
  return GU;
}

// 裏か表か
function actionAgainstOmoteUra(){
  if(matches % 2 == 0){
    return GU;
  }
  return PA;
}

// 帰って来たうらか表か
function actionAgainstOmoteUra2(){
  if(matches % 3 == 0){
    return CHOKI;
  }
  return GU;
}

// 順番に出すマン
function actionAgainstJunban(){
  if(matches % 3 == 1){
    return PA;
  }
  else if (matches % 3 == 2) {
    return GU;
  }
  else {
    return CHOKI;
  }
}

//帰って来た裏か表か
function actionAgainstRotation2(matches){
  if(matches == 1 || matches == 2){
    return GU;
  }

  let index2 = Math.max(0, list.length -2 );
  let lastCard2 = list[index2];

  if(lastCard2 == lastCard + 1 || lastCard2 == lastCard - 2){
    return lastCard2;
  }

  return lastCard;
}

// フィズバズ
function actionAgainstFizzBuzz(oppornent){
  if(matches % 15 == 0){
    return CHOKI;
  }
  else if (matches % 15 == 5 || matches %  15 == 9 || matches % 15 == 12) {
    return GU;
  }
  return PA;
}

// ランダム
function actionAgainstRandom() {
  return GU;
}


function action(oppornent){

  list = cards();
  index = Math.max(0, list.length -1 );
  lastCard = list[index];

  matches = list.length + 1;

  if(oppornent == "fighter::choki-lover"){
    ans = actionAgainstChoki();
  }
  else if(oppornent === "fighter::odd-even"){
    ans = actionAgainstOmoteUra();
  }
  else if(oppornent == "fighter::on-third"){
    ans = actionAgainstOmoteUra2();
  }
  else if(oppornent == "fighter::rotation"){
    ans = actionAgainstJunban();
  }
  else if(oppornent == "fighter::returned-rotation"){
    ans = actionAgainstRotation2(matches);
  }
  else if (oppornent == "fighter::fizzbuzz") {
    ans = actionAgainstFizzBuzz();
  }
  else{
    ans = actionAgainstRandom();
  }
  return ans;
}
