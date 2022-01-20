var EventEmitter = require('events');

var sec = 1;

var timer = new EventEmitter();

timer.on('tick', function(){
    console.log("%d초 지났습니다.", sec);
    sec = sec + 1;
})

setInterval(function(){
    timer.emit('tick');
}, 1000);