
const GU = 0;
const CHOKI = 1;
const PA = 2;
let matches;
var ans;

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
  if(matches >= 50){
    matches = 0;
  }
  matches = matches + 1

  let ans;

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
  else if (oppornent == "fighter::fizzbuzz") {
    ans = actionAgainstFizzBuzz();
  }
  else{
    ans = actionAgainstRandom();
  }
  return ans;
}
