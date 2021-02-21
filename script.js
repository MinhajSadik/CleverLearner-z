
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


// object in javascript

var student = {id:131, name:'ami', age:20};
var student1 ={id:131, name:'tumi', phone:1811};

var phoneNo1 = student1['phone'];// fast way to see output object
var phoneNo2 = student1['phone'];// second way to see output object
var phoneNo3 = "phone"; // third way to see output object
var phoneOutput = student1[phoneNo3];// third way to see output object

// console.log(phoneNo1, phoneNo2, phoneOutput);

// update object property
student1.phone = 39999; // first way to set value in a object property
student1['phone'] = 88888; // second way to set value in a object property
student1[phoneNo3] = 193939; // third way to set value in a object property

student1.profession = 'programming'; //first way to create a property and set value in a object
student1['profession'] = 'programmer'; //second way to create a property and set value in a object 

console.log(student1);

