const GU = 0;
const CHOKI = 1;
const PA = 2;
let matches;
var ans;


// チョキ

// function action(oppornent){
//   if(matches > 50){
//     matches = 1;
//   }
//   matches = matches + 1;
//   return GU;
// }


// 裏か表か
// matches = 0;
// function action(oppornent){
//   if(matches > 99){
//     matches = 0;
//   }
//   matches = matches + 2;
//   ans = matches % 4;
//   console.log(matches);
//   return ans;
// }

// 順番に出すマン

matches = 1;
function action(oppornent){
  if(matches > 50){
    matches = 1;
  }
  matches = matches + 1;
  ans = matches % 3;
  return ans;
}

// フィズバズ

// matches = 0;
// function action(oppornent){
//   if(matches >= 50){
//     matches = 0;
//   }
//   matches = matches + 1;
//   if(matches % 15 == 0){
//     return CHOKI;
//   }
//   else if (matches % 15 == 5 || matches %  15 == 9 || matches % 15 == 12) {
//     return GU;
//   }
//
//   return PA;
// }

// ランダム

// matches = 0;
// function action(oppornent) {
//   return oppornent;
// }
