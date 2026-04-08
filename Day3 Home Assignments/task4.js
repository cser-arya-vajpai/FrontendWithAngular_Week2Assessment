// Check whether the given string is a valid email or not
// 	ex: “abc@gmail.com” //true
// 	“abc@yahoo.com” //true
// 	“abc@icloud.com” //true
// 	“abc@mail” //false
// 	“abc.com” // false
// 	Hint : check for @ and .com or .in 

function isValidEmail(str) {
    if (
        str.includes("@") &&
        (str.endsWith(".com") || str.endsWith(".in")) &&
        str.indexOf("@") > 0
    ) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isValidEmail("abc@gmail.com")); 
console.log(isValidEmail("abc@yahoo.com")); 
console.log(isValidEmail("abc@icloud.com")); 
console.log(isValidEmail("abc@mail")); 
console.log(isValidEmail("abc.com")); 