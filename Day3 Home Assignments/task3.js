//Count the number of spaces in a given string 
	//input: “Hey all, have a good day!!”
	//output: 5

function spaces(str) {
    let count = 0;
    for(s of str){
        if(s == " "){
            count++;
        }
    }
    console.log(count);
}

console.log(spaces("hi  all  all"));
console.log(spaces("ok hi"));