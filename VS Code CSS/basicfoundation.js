function return arr{
	var arr = [];
	for(var i = 1; i<256; i++){
		arr.push(i);
	}
	return arr;
}

function return even sum of 1-1000{
	var sum = 0
	for(var i = 1; i < 1001; i++){
		if(i % 2 == 0){
			sum = sum + i;
		}
	}
	return sum;
}

function return odd sum 1-5000{
	var sum = 0;
	for(var i = 1; i <= 5000; i++){
		if( i % 2 == 1){
			sum = sum + i;
		}
	}
	return sum
}

function iteratearray{
	var sum = 0;
	for(var i = 0; i <arr.length; i++){
		sum = sum + arr[i];
	}
	return sum;
}

function findMax{
	var max = arr[0];
	for(var i = 1; i <x.length; i++){
		if(arr[i] > max){
			max = arr[i]
		}
	}
	return max
}


function findAVGarr{
	var sum =0;
	for(var i = 0; i<x.length; i++){
		sum = arr[i] + sum;
	}
	return sum/arr.length;
}


function oddArr{
	var newarr = []
	for(var i = 1; i <= 50; i++){
		if(i % 2 == 1){
			arr.push(i);
		}
	}
}

function greaterThanY{
	var num= 0;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] > Y){
			num = num + 1;
		}
	}
	return num
}	


function squarearr{
	for(var i = 0; i < x.length; i++){
		arr[i] = arr[i] * arr[i]
	}
	return squarearr
}


function negativearr{
	for(var i = 0; i < x.length; i++){
		if(arr[i] < 0){
			arr[i] = 0;
		}
	}
	return negativearr;
}

function max/min/avg{
	var sum = arr[0];
	var max = arr[0];
	var min = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (arr[i]>max) {
			max = arr[i];
		}
		if (arr[i] < min){
			min = arr[i];
		}
		sum = sum + arr[i]
	}
	var avg = sum/arr.length;
	var newarr = [max, min , avg]
	return newarr;
}

function swap(arr){
var temp = arr[0];
arr[0]= arr[arr.length-1];
arr[arr.length-1] = temp;
return arr;
}

function arrString{
	for(var i = 0; i < arr.length){
		if arr[i] < 0{
			arr[i]= "Dojo"
		}
	}
	return arrString;
}