var a = 3
var b = 3
console.log(a == b)

var a=[]
console.log(a.lenght);
a=3
console.log("Ket qua : "+a.lenght);

//Kieeu tham tri

let arr=1;
let brr=arr;
arr=2;
console.log(brr);

let cat = {name:"cat"}
let bat=cat
cat.name="dog"
console.log(bat)
console.log(typeof(bat))

//Vd
const Person={
    id:1,
    info:{
        name:"John",
        age:23
    }
}
const Info=Person.info
Info.name="David"
console.log(Person.info.name)

//ruyền tham số dạng tham trị
//cũng do tính chất của tham trị nên trong hàm có thay đổi thế nào thì giá trị truyền vào bên ngoài cũng không ảnh hưởng.
function changeNumber(c){
    c=0;
    console.log(c);
}
const d=1;
changeNumber(d);
console.log("Ket qua : "+d);

//với kiểu tham chiếu, do tính chất của nó thì việc gán chỉ là gán địa chỉ ô nhớ lưu trữ giá trị 
//thay đổi giá trị bên trong hàm vẫn sẽ ảnh hưởng đến giá trị bên ngoài.

function changeName(user){
    user.firstname="Hung";
    console.log(user.firstname)//Hung
}
const manf={firstname:"Thanh"}
changeName(manf)
console.log("Information : "+manf.firstname)

//bo tham chieu
const man1={UserName : "Sanji"};
const man2={...man1}
//man2 là một object mới với địa chỉ mới và có tất cả giá trị của man1
man1.UserName="Zoho"
console.log(man2.UserName)


// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log('hello',i);
//     },200)
// }
// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log('hello 2',i);
//     },200)
// }

let word="Hello";
word.toLowerCase();
console.log("Ket qua : "+word);
word=word.toLocaleLowerCase();
console.log(word);

function mutableFunc(a,b){
    a=a+b;
    return a;
}
var x=2
var y=2
console.log("Ket qua : "+mutableFunc(x,y))

let picture={
    name:"Mona Lisa",
    artist:"Da Vinci",
    isAbstract:false,
}
picture.name="Starry night"
picture.artist="Van Gogh"
console.log(picture)

let copyOfpicture = picture
copyOfpicture.isAbstract=true
console.log(copyOfpicture === picture)

// dòng let copyOfPicture = picture trỏ copyOfPicture vào
// object picture hiện tại, nghĩa là nó không hẳn là một bản copy.


function checkoutBook(book) {  
    let copy = { ...book }  

    copy.isCheckedOut = true  

    return copy 
} 
let book = {  title: "Dế mèn phiêu lưu ký",  author: "Tô Hoài",  isCheckedOut: false } 
book = checkoutBook(book);
console.log(book)

// document.addEventListener('click',()=>console.log('Clicked'))
// document.removeEventListener('click',()=>console.log('Remove clicked'))


function minimum(array){
    array.sort();
    return array[0]
}
const items = [5,1,8,4]
const min = minimum(items)
console.log("Min = "+min)
console.log("Min 2 = "+items)

//array

var Array2=[5,6,7,8,43,54,324,54,23]

NUMBER=Array2.sort(function(a,b){return a-b});

console.log(NUMBER)

var crr=[1,2,4,3];
for(var i=0;i<crr.length;i++){
    console.log(crr[i]);
}

let Users={fname:'Alice',lname:'Zuberg',Age:12,fname:'Alice 2',lname:'Zuberg 2',Age:17}

let merge_Text='';
for(let x in Users){
    merge_Text+=Users[x];
}
console.log(merge_Text)

console.time("Run time : ");
let peoples=['Kirito','Asuma','Alice'];
let listed='';

for(let value of peoples){
    listed+=value+' '
}
console.log(listed);
console.timeEnd("Run time : ");
//Giá trị truyền qua của các giá trị nguyên thủy
function square(x){
    x=x*x;
    return x;
}
let y1=10;
let result =square(y1);
console.log("Ket qua : "+result)
console.log("Ket qua : "+y1)

//Giá trị chuyển tiếp của các giá trị tham chiếu

let PersonS = {
    name:'Jhon',
    Age:25,
};
function increaseAge(obj){
    obj.Age+=1;
}
increaseAge(PersonS)
console.log(PersonS)

function IncreaseAge(obj){
    obj.Age+=1;
    obj={name:'Jane',Age:22};
}
IncreaseAge(PersonS)
console.log(PersonS)

//Pass by Value 
//Pass by Reference 

function Passbyvalue(a,b){
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass by value function - >a = ${a} b = ${b}`)
}
let A=1;
let B=2;

console.log(`Before calling Pass by value Function -> a = ${A} b = ${B}`);

Passbyvalue(A,B);

console.log(`After calling Pass by value Function -> a =${A} b = ${B}`);

function PassbyReference(obj){
    let tmp=obj.a;
    obj.a=obj.b;
    obj.b=tmp;
    console.log(`Inside pass by Reference Function -> a = ${obj.a} b = ${obj.b}`)
}
let obj={
    a:10,
    b:20,
};
console.log(`Before calling pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);
PassbyReference(obj)

console.log(`After calling Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);

function PassbyReferenceK(Obj){
    Obj = {
        a:10,
        b:20,
        c:"GEEKSFORGEEKS"
    }
    console.log(`Inside Pass by Reference Function -> obj `);
    console.log(Obj)
}

let Obj={
    a:10,
    b:20
}
console.log(`Updating the object reference -> `)
console.log(`Before calling Pass By 
        Reference Function -> obj`);
console.log(Obj);

PassbyReferenceK(Obj);
console.log(Obj)

//callback

function tangQua(qua){
    return console.log("Da tang : "+qua);
}
function oNha(vo,tangQua){
    var qua = "Qua da Nhan";
    tangQua(qua);
}

function sayHello(name,callback){
    var myName = name.toLowerCase()+",Hello";
    return callback(myName);
}
var Result = sayHello("Khoa",function(arg){
    return arg;
})

console.log(Result);

var keywords = ["Khoa","codelearn","Hoc lap trinh","Codelearn.io"];
keywords.forEach(function(eachName,index){
    console.log(index+1+"."+eachName);
});

//Nguyên tắc khi thực hiện Callback Function
//Tham số truyền vào phải là một function


var personInfor={
    name:'Khoa',
    setName:function(name){
        this.name=name;
    }
};

function Test(callback){
    callback('Nguyen Dinh Khoa');
}
var k = Test(personInfor.setName);
console.log(k);

// function greeting(name){
//     console.log(`Hello,${name}`);
// }
// function processUserInput(callback){
//     const name =prompt("Please enter your name . ");
//     callback(name);
// }
// processUserInput(greeting)

function filter(numbers){
    let results =[];
    for(const number of numbers){
        if(number %2 !=0){
            results.push(number);
        }
    }
    return results;
}
let numbers =[1,2,4,7,3,5,6];
console.log(filter(numbers));


function myDisplay(some){
    document.getElementById("demo").innerHTML=some;
}
function myFirst(){
    myDisplay("Hello");
}
function mySecond(){
    myDisplay("Goodbyte");
}

// myFirst();
// mySecond();

function myDisplay2(some){
    document.getElementById("demo2").innerHTML=some;
}
function myFirst2(){
    myDisplay2("Hello 2");
}
function mySecond2(){
    myDisplay2("Goobyte 2");
}
// mySecond2();
// myFirst2();

function myDisplay3(some){
    document.getElementById("demo2").innerHTML=some;
}
function myCalculator(num1,num2){
    let sum=num1+num2;
    return sum;
}
// let resulT=myCalculator(8,7);
// myDisplay3(resulT);
//Trong HTML. Một vài trong số chúng là quan trọng nhất: summary, time, aside, audio, command, data, datalist
//, details, embed, wbr, figcaption, figure, footer, header, article, hgroup, bdi, canvas, keygen, mark, meter, 
//nav, output, progress, rp, rt, ruby, section, source, track, video.

function myDisplay4(some){
    document.getElementById("demo2").innerHTML=some;
}
function myCalculator4(num1,num2,mycallBack){
    let sum = num1+num2;
    mycallBack(sum)
}

myCalculator4(5,5,myDisplay4);

function first(){
    setTimeout(function(){
        console.log(1+"text 1");
    });
}
function second(){
    console.log(2+"text 2");
}
// first();
// second();

//Callback là cách đảm bảo code sẽ không hoạt động 
//trước khi các code khác hoàn thành việc thực thi.

function calculator5(n,callback){
    var i;
    var sum = 0;
    for(i=1;i <= n;i++){
        sum+=i;
    }
    console.log(`Sum is : ${sum}`);
    callback(sum);
}
let n = 10;
calculator5(n,function(sum){
    console.log(`Ageletor id : ${sum/n}`);
})
///
// console.log("Thực Hiện Hành Động 1");
// setTimeout(function() {
//   console.log("Thực Hiện Hành Động 2");
// }, 1000);

// console.log("Thực Hiện Hành Động 3");

//Do đó để nhằm hạn chế về vấn đề hiệu suất thì javascript xử lý sự kiện theo bất đồng bộ: 
//Nếu như thời gian chờ của một hành động nào đó quá dài thì nó sẽ chuyển sang thực thi hành động khác và sẽ gọi lại hành động đó sau.
// Điều này giúp giảm thiểu thời gian chờ của chương trình.

// function myFunction2() {
//     let d = new Date();
//     document.getElementById("demo").innerHTML=
//     d.getHours() + ":" +
//     d.getMinutes() + ":" +
//     d.getSeconds();
//   }

function Filter(arr,callback){
    var result=[];
    for(let i=0;i<arr.lenght;i+=1){
        if(callback(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

function makeCounter(){
    let count=0;
    return function(){
        return count++;
    };
}

let counter=makeCounter();
counter();
console.log(counter())
counter();
console.log(counter())

console.log(typeof 42);
console.log(typeof 'bluber');
console.log(typeof true);
console.log(typeof undeclaredVariable);

console.log("**************")

console.log(typeof "John")
console.log(typeof 3.14)
console.log(typeof NaN)
console.log(false)
console.log(typeof [1,2,3,4])
console.log(typeof {name:'John',Age:34})
console.log(typeof new Date())
console.log(function(){})
//onsole.log(mycar)
console.log(null)


const fruits = ["Banana","Orange","Apple"]

function isArray(myArray){
    return myArray.constructor.toString().indexOf("Array") > -1;
}

console.log(isArray(fruits))


const Fruits = ["Banana","Orange","Apple","Mango"]

function IsArray(myArray){
    return myArray.constructor === Array;
}
console.log(IsArray(Fruits))

const myDate = new Date();
function isDate(myDate){
    return myDate.constructor.toString().indexOf("Date") > -1
}
console.log("Information : ",isDate(myDate))

function isDate(myDate) {
    return myDate.constructor === Date;
}

let person = {firstName:"John",lastName:"Done",Age:50,eyeColor:"Blues"}

console.log(typeof person)

function cloneDeep(obj){
    return{...obj}
}
const obj1 = {x:20,y:{a:1,b:1}}
const obj2=cloneDeep(obj1)
obj2.x=1
obj2.y.a=3;
console.log(obj1,obj2)

function cloneDeep2(obj){
    return JSON.parse(JSON.stringify(obj1))//tac dung chuyen data tu dang obj sang string
}

var text = 'outside'
function show(){
    var text;
    console.log(text)
    text='inside'
}
show();













