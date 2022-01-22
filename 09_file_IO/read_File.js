// 1. fs(파일 시스템) 모듈 사용
var fs = require('fs');

// 2. 비동기 방식의 파일 읽기. 파일을 읽은 후 마지막 파라미터에 넘긴 callback 함수가 호출됨
fs.readFile('sample.txt', 'utf-8', function(err, data){
    console.log('01 readsync : %s', data);
});

// 3. 동기 방식의 파일 읽기. 파일을 읽은 후 data 변수에 저장.
var data2 = fs.readFileSync('sample.txt', 'utf-8');
console.log('02 readsync : %s', data2);

// 02 readsync 부터 먼저 실행된다 왜냐하면,
// 비동기방식으로 파일을 읽는 경우에는 다른 스레드에서 작업을 수행하기 때문에
// 로그의 순서가 동기방식을 먼저 출력하는 것이다.