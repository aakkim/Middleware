// function greetTheStudent(studentName){
    
//     return `Hello there ${studentName}`;
    

// }

// const greetTheStudent = function (studentName){// parameter // anonymous function // expression
    
//     return `Hello there ${studentName}`;
    

// }

// fat arrow function
const greetTheStudent = (studentName) => `Hello there ${studentName}`;
const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}. ${firstName}`;


// const studentName = 'Mary Jane';
// const greet = greetTheStudent(studentName);//argument
// console.log(greet);

const  titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName);

// console.log(message+ ' ' + studentName);

// console.log(message+ ' ' + studentName2);