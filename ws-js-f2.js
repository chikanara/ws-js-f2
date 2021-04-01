//difference between "==" && "==="
var a = 1;
var b = "1"
var c = a
console.log(a === b)
console.log(c)

// Array
var arr = [ 5 , 6 , 7 ]
var sum=0
for(var i= 0 ; i<arr.length ; i++){
  sum = sum + arr[i]
}
console.log(sum)
console.log(arr[2])

// object
var arr = [ 5 , 6 , 7 ]
var sum=0
for(var i= 0 ; i<arr.length ; i++){
  sum = sum + arr[i]
}
console.log(sum)
console.log(arr[2])

//convert array into object
var obj = {
  name:"hamza",
  age:24,
  add:"mahras"
}
var arrKey = Object.keys(obj)
console.log(arrKey)
var arrValue = Object.values(obj)
console.log(arrValue)
var arrEntries = Object.entries(obj)
console.log(arrEntries)

// ex1
function minMax(arr) {
	var min = Math.min(...arr)
  var max = Math.max(...arr)
  return [min,max]
}
console.log(minMax([0,1,2,3]))