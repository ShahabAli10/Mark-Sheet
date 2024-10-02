var student = prompt("Enter student name");
var subject1 = prompt("Enter subject1 number");
var subject2 = prompt("Enter subject2 number");
var subject3 = prompt("Enter subject3 number");
document.write(" Name: " , student, "<br>" );
document.write(" Subject1: ", subject1, "<br>");
document.write(" Subject2: ", subject2, "<br>");
document.write(" Subject3: ", subject3, "<br>");
totalmark = 300;
var obtained = parseFloat(subject1) + parseFloat(subject2) + parseFloat(subject3); 
var num1 = obtained / totalmark * 100;
document.write(" Percentage: ", num1, " % ");

