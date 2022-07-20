

function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false; //먼저 길이가 4나6이 아니면 false반환 
  //&&논리곱 : 왼쪽거랑 오른쪽거 둘다 true여야 true반환
  for (let i = 0; i < s.length; i++) {
      if (isNaN((s[i]))==true) {
          return false;} //inNAN(isNotANumber로, 숫자가아니면true 숫자면false)
      else {
          return true;}
  }
}
console.log(solution("eee666")); //근데 이거실패(js에서는 숫자에 e가 붙으면 지수로 인식하여 문자인 경우도 그냥 숫자로 인식)