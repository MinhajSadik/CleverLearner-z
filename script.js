
var x = Math.random() * 1000;

console.log(x.toFixed(1));

var friends = ['minhaj', 'ahmed','sadik','lamiya'];
for (let i = 0; i < friends.length; i++) {
    let element = friends[i];
    console.log(element)
}


// switch statement in javascript
var number = 70;
switch (number) {
    case 90:
        console.log(`it's 90`);
        break;
    case 80:
        console.log(`it's 80`);
        break;
    case 70:
        case 60:
            console.log(`it's 70 or 60`);
        break;
    case 50:
        console.log(`it's 50 `);
        break;
    case 40:
        console.log(`it's 40`);
        break;
    case 30:
        console.log(`it's 30`);
        break;
    case 20:
        console.log(`it's 20`);
        break;
    case 100:
        console.log(`it's 100`);
        break;
    default:
}


//function in javascript

function dubbleIt(num){
    var result = num * 2;
    return result;
}

var first = dubbleIt(5);
var second = dubbleIt(50);
var total = first + second;
console.log(first + second);


function add(num1, num2){
    var result = num1 + num2;
    return result;

}
var sum = add(10, 10);
console.log(sum);