function big(arr){
	for(var i = 0; i < arr.length; i++){
		if( arr[i] > 0){
			arr[i] = "biggie";
		}
	}
	return (arr)
}



function highlow(x){
	var min = x[0];
	var max=x[0];
	for(var i = 1; i < x.length; i++){
		if(x[i] < min){
			min = x[i]
		}
		if(x[i] > max){
			max= arr[i]
		}
	}
	console.log(min);
	return max;
}
highlow(x)




function printoneAnother(x){
	function a(arr){
		console.log(arr.length-2)
		for(var i = 0; i < arr.length;i++){
			if (arr[i] % 2 == 1);
		}
	}
	return arr[i]
}




function doubleVision(x){
	for(var i = 0; i< x.length; i++){
		x[i] = x[i] + x[i];
	}
	return x;
}
a = doublevision()
console.log(a)




function countPositive(x){
	var count = 0;
	for( var i = 0; i < x.length; i++){
		if(x[i] > 0){
			count++;
	}
	x[x.length - 1] = count;
	return x
}




function evensandOdds(x){
	var countOdd= 0;
	var countEven = 0;
	for (var i = 0; i < x.length; i++){
		if(arr[i] % 2 == 0){
			countOdd= 0;
			countEven ++;
		if countEven == 3{
			console.log("Even more so!");
		}	
		}
		if(arr[i] % 2 == 1){
			countOdd++;
			countEven= 0;
			if(countOdd == 3){
				console.log("thats odd");
			}
		}
	}
}
a()





function a(arr){
	for(var i = 0; i < x.length; i++){
		if( i % 2 === 1){
			arr[i]++;
		}
		console.log(arr[i]);
	}
	return arr;
}
a()




function lengths(arr){
	for(var i = arr.length-1; i > 0; i--){
		arr[i]= arr[i-1].length;
	}
	return arr;
}
length();





function add7(x){
	var newarr = [];
	for(var i = 0; i < x.length; i++){
		x[i] += 7;
		newarr.push(x[i]);
	}
	return newarr;
}
add7();




function reversMe(arr){
	for(var i = 0; i < arr.length/2; i++){
		var temp = arr[i];
		arr[i]= arr[arr.length-i-1];
		arr[arr.length-i-1] = temp;
	}
	return arr;
}
reversMe();





function negativeOulook(arr){
	var newarr= [];
	for(var i = 0; i < arr.length; i++){
		if(x[i] > 0){
			x[i]= -x[i];
			newarr.push(x[i])
		}
		else(newarr.push (x[i]))
	}
return newarr;
}
negativeoutlook();





function sometimesHungry(arr){
	var count= 0;
	for(var i = 0; i < arr.length; i++){
		if (arr[i] == "foods"){
			console.log("yummy");
			count++;
		}
	}
	if(count == 0){
		console.log("i am hungry");
	}
}
sometimesHungry()





function swapCenter(x, Y){
	var temp = arr[0];
	arr[0] = arr[arr.length-1];
	arr[arr.lenght - 1] = temp;
	var Y = arr[2];
	arr[2] = arr[arr.length-3];
	arr[arr.length-3]= Y;
	return arr;
}




function a(x, Y){
	for(var i = 0; i < x.length; i++){
		x[i]= x[i]*Y;
	}
	return x;
}
a([1,2,3], 5)
a(x, Y);