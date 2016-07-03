var x = [
  3.5,
  'Dojo',
  'rocks',
  'Michael',
  'Sensei'
];

for(var idx in x){
   console.log(x[idx]);
}
console.log("-----");
x.push(300);
x.concat(["hello", "world", "JavaScript is Fun"]);
for(var idx in x){
   console.log(x[idx]);
}

console.log("-----");
var sum = 0
for(var i=1;i <= 500; i++){
   sum += i;
}
console.log(sum);
console.log('=======');
var sample_arr = [1,5,90,25,-3,0];
var min = sample_arr[0]
var max = sample_arr[0]
for(var idx = 1; idx < sample_arr.length; idx++){
  if(sample_arr[idx] < min){
    min = sample_arr[idx];
  }
  if(max < sample_arr[idx]){
     max = sample_arr[idx];
  }
}
console.log('min:',min);
console.log('max:',max);

var new_ninja = {
  name: 'Jessica',
  profession: 'coder',
  favorite_language: 'JavaSciript',
  dojo: 'Dallas'
}

for(var key in new_ninja){
   console.log(key, new_ninja[key]);
}
