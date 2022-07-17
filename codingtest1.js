import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt(); // 1. n을 입력 받기
      sc.close();
      
      for (int i = 1; i <= n; i++) { // 2. 1부터 i를 1씩 증가하며 반복하기
          for (int j = 1; j <= i; j++) { // 3.  i의 갯수 만큼
								System.out.print("*"); //         별 출력하기
					}
          if (i != n) { // 5. n이라면 줄바꾸지 않기
             System.out.println(); // 4. 줄바꾸기
	        }
      }
	}
}

let fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString().split(' ');
// 1. n을 입력 받기 (입력받는 형식은 외우지않아도 됩니다!)

let num = Number(n);

result = ''; //결과값을 문자열에 저장

for (let i = 0; i <= num; i++) {// 2. 1부터 i를 1씩 증가하며 반복하기
  for (let j = 0; j <= i; j++) { // 3.  i의 갯수 만큼
    result += '*';//별 출력하기
  }
	if(i!=n){// 5. n이라면 줄바꾸지 않기
	  result += '\n';// 4. 줄바꾸기
	}
}

console.log(result);//결과 문자열 출력

//9조 영건님 풀이
<!DOCTYPE html>
<html lang="en">
<head>
	@@ -15,15 +34,28 @@
            let result = "";
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    result += "*";                 
                }
                result += "\n";               
            }
            return result;
        }
        console.log(solution(5, 3));
    </script>
</body>
</html>