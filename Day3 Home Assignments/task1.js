// Create a function to give a grade to the students A 100-76,B 75-61,C 60 - 56 ,
// D 56-41 and Falied if the marks are less that 40 implement using else if and switch.

function grade(marks) {
    let grade;
    if(marks <= 100 && marks >= 76) {
        grade = 'A';
    }
    else if(marks <= 75 && marks >= 61) {
        grade = 'B';
    }
    else if(marks <60  && marks >= 56) {
        grade = 'c';
    }
    else if(marks <= 55 && marks >= 41) {
        grade = 'D';
    }
    else{
        grade = 'E';
    }

    console.log(grade);
}

console.log(grade(78));
console.log(grade(7));
console.log(grade(38));
console.log(grade(48));
console.log(grade(61));


//SWITCH CASE

function grade(marks) {
    let grade;

    switch (true) {
        case (marks <= 100 && marks >= 76):
            grade = 'A';
            break;

        case (marks <= 75 && marks >= 61):
            grade = 'B';
            break;

        case (marks <= 60 && marks >= 56):
            grade = 'C';
            break;

        case (marks <= 55 && marks >= 41):
            grade = 'D';
            break;

        default:
            grade = 'E';
    }

    return grade;
}

console.log(grade(78));
console.log(grade(7));
console.log(grade(38));
console.log(grade(48));
console.log(grade(61));