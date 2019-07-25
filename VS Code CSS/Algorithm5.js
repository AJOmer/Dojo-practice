function arr(x){
	for(var i = 0; i< x.length; i++){
		if(x[i] <0){
			x[i] = 0;
		}
	}
	return x;
}


funcion arr(x){
	for(var i = 0; i< x.length; i++){
		x[i]= x[i]+1;
	}
	x.pop();
	x.push(0);
}
return x;


function reversevalues(x){
	for(var i = 0; i < (x.length/2); i++){
		var temp = x[i];
		x[i] = x[(x.length-i-1)];
		x[x.length-i-1]= temp
	}
	return x;
}

function arr(x){
	var newarr = [];
	for(var i = 0; i < x.length; i++){
		arr.push(x[i]);
		arr.push(x[i]);
	}
	return newarr;
}