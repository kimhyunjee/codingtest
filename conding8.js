

function solution(arr) {
  const array = [1, 2, 3, 4];
  let answer = 0;
  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
  sum += array[i]; //배열의 길이만큼 모든 요소들을 더한다 = sum
  }
    return answer = sum / arr.length; // answer 는 모두 더한 값을 배열갯수로 나눠준다
  }  

  //reduce 함수 이용하기
  function solution(arr) {
    // reduce 메서드를 이용하여 배열의 숫자들을 더해준다.
    const sum = arr.reduce((acc, cur) => acc + cur);
  
    // 수의 합과 배열 수의 갯수를 나누어 평균 값을 구하고 리턴한다.
    return sum / arr.length;
  }
  
  //console.log(solution([10,20]));
  
