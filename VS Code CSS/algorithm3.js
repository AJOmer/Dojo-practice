function returnOddArray(){
   var temp = []
   for(var i =1; i <256; i+2){
   	temp.push(i);
}
return arr;
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,



function printAverage(x){
   sum = 0;
   for (var i = 0; i < x.length; i++) {
   	sum = sum + x[i];
   }
   printAverage= sum/x.length;
   return printAverage;
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
  
y = printAverage([2,5,8]);
console.log(y); // should log 5


function squareValue(x){
   for( var i=0; i < x.length; i++){
   	x[i]= x[i]*x[i];
   }
   return x;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
  
y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]

DID PART 1 on paper