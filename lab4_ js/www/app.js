var fname = "kanokwan";
var lname = 'kongpeng'

var num1 = 123
var num2 = 45.333

var arr = ["kanokwan", "kongpeng", 123, 45.333, true,]

var bol = true
if (bol) {
    //  console.log("yes");
}
// window.alert("fname")
// console.log(arr[0] + " " + arr[1]);
// document.getElementById("divname").innerHTML = fname + ' ' + lname;
// console.log(fname + ' ' + lname);
// console.log(num1 + num2);
// console.log(fname + num1);

var arr = ["kanokwan", "kongpeng", 16, true]
console.log("arr:", arr[0])

var stdOdj = {
    fname: "kanokwan",
    lname: "kongpeng",
    id: 1234567898
}
console.log(stdOdj.fname)

const x = "kanokwan"
console.log(x)

function showName(name) {
    console.log("hay" + name)
}
showName("kanokwan")

function addNumber() {
    let result = 1 + 1
    return result
}

let res = addNumber(8)
console.log(res)

var addNumber2 = (num) => {
    let result = 1 + num
    return result
}

let res2 = addNumber2(5)
console.log(res2)

var score = 80
if (score <= 50) {
    console.log("F")
} else if (score <= 70) {
    console.log("B")
}
else {
    console.log("A")

}

for (let i = 0; i < 10; i += 2) {
    console.log(i)
}

var arr2 = ["kanokwan", "kongpeng", 123, 45.333, true,]
arr2.forEach((x) => { console.log(x) })

arr2.forEach(function (x) { console.log(x) })
