const GU = 0;
const CHOKI = 1;
const PA = 2;
var ans;

//デフォルト
function randomCard(matches){
  let randomValue = Math.random();
  let randomInt = Math.floor(randomValue * 100);
  let cardNum = Math.floor(randomInt / 3);
  return cardNum;
}


// チョキ
function actionAgainstChoki(matches){
  return GU;
}

// 裏か表か
function actionAgainstOmoteUra(matches){
  if(matches % 2 == 0){
    return GU;
  }
  return PA;
}

// 帰って来たうらか表か
function actionAgainstOmoteUra2(matches){
  if(matches % 3 == 0){
    return CHOKI;
  }
  return GU;
}

// 順番に出すマン
function actionAgainstJunban(matches){
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
function actionAgainstRotation2(matches,lastCard,lastCard2){
  if(matches <= 2){
    ans = randomCard();
    return ans;
  }
  if(lastCard2 == lastCard + 1 || lastCard2 == lastCard - 2){
    return lastCard2;
  }
  return lastCard;
}

// フィズバズ
function actionAgainstFizzBuzz(matches){
  if(matches % 15 == 0){
    return CHOKI;
  }
  else if (matches % 15 == 5 || matches %  15 == 9 || matches % 15 == 12) {
    return GU;
  }
  return PA;
}

// ランダムマン
function actionAgainstRandom(matches) {
  return GU;
}

function action(oppornent){
  var list = cards();
  var index = Math.max(0, list.length -1 );
  var index2 = index - 1;
  var lastCard = list[index];
  var lastCard2 = list[index2];
  let matches = list.length + 1;

  if(oppornent == "fighter::choki-lover"){
    ans = actionAgainstChoki(matches);
  }
  else if(oppornent === "fighter::odd-even"){
    ans = actionAgainstOmoteUra(matches);
  }
  else if(oppornent == "fighter::on-third"){
    ans = actionAgainstOmoteUra2(matches);
  }
  else if(oppornent == "fighter::rotation"){
    ans = actionAgainstJunban(matches);
  }
  else if(oppornent == "fighter::returned-rotation"){
    ans = actionAgainstRotation2(matches,lastCard,lastCard2);
  }
  else if (oppornent == "fighter::fizzbuzz") {
    ans = actionAgainstFizzBuzz(matches);
  }
  // else if (oppornent == "fighter::random"){
  //   ans = actionAgainstRandom();
  // }
  else {
    ans = randomCard(matches);
  }
  return ans;
}
