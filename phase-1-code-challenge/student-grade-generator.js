// This function calculates the grade of a student based on their exam mark.
function calculateGrade() {
     // Get the exam mark entered by the user from the HTML document.
    let mark = parseInt(document.getElementById("mark").value);
     // Initialize the grade variable.

    let grade;
    if (mark > 79) {
        grade = 'A';
    } else if (mark >= 60 && mark <= 79) {
        grade = 'B';
    } else if (mark >= 50 && mark <= 59) {
        grade = 'C';
    } else if (mark >= 40 && mark <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Display the calculated grade on the HTML document.
    document.getElementById("result").innerHTML = "The student's grade is: " + grade;
}