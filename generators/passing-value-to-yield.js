function* genFunc(){
    var a1 = yield;
    console.log(a1); //a1 = 1
    var b1 = yield;  
    console.log(b1); //b1 = 2
    var c1 = yield;
    console.log(c1); //c1 = 3

}

var genObject = genFunc();

genObject.next(0); //starts genFunc(), the value inside the next() call is ignored
genObject.next(1); //sends a value of 1 to genFunc()
genObject.next(2); //sends a value of 2 to genFunc()
genObject.next(3); //sends a value of 3 to genFunc()
genObject.next(4); //the value inside next() is ignored because genFunc() has no more yields



// example 2:
//Notice how the next() method is used to obtain values from yield, modify them, and then send them back:

function* genFunc(){
    var a = yield 'a';
    console.log(a); // a = 'a!'
    var b = yield 'b';  
    console.log(b); // b = 'B'
    var c = yield 'c';
    console.log(c); // c = 'abc'

}

var genObject = genFunc();

var w = genObject.next(); //starts genFunc(), w = Object {value: 'a', done: false}
var x = genObject.next(w.value + '!'); //sends a value of "a!" to genFunc(), x = Object {value: 'b', done: false}
var y = genObject.next(x.value.toUpperCase()); //sends a value of 'B' to genFunc(), y = Object {value: 'c', done: false}
var z = genObject.next(w.value + x.value + y.value); //sends a value of 'abc' to genFunc(), z = Object {value: 'undefined', done: true}