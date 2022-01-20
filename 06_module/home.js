var mod1 = require('./custom_module');

// 1. formatted 특수문자 %d 를 사용해서 mod1.sum() 에서 리턴된 숫자값을 출력
console.log('sum = %d', mod1.sum(100));

// 2. formatted 특수문자 %s를 사용해서 mod1.var1의 문자값을 출력
console.log('var1 = %s', mod1.var1);