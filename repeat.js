// 0부터 9까지 출력하는 while문

var i = 0;

while (i < 10)
{
    console.log('i의 값은 : ' + i);
    i = i + 1;
}

// 별표로 계단 출력하기

var star;

for (var x = 1; x <= 5; x++)
{
    star = "";

    for (var y = 0; y < x; y++)
    {
        star += "*";
    }

    console.log(star);
}