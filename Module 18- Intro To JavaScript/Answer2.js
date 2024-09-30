function gradeStudent(marks) 
{
    let grade;
  
    if (marks > 90) 
        {
            grade = 'A';
        } 
    else if (marks >= 70 && marks <= 90) 
        {
            grade = 'B';
        } 
        else if (marks >= 50 && marks < 70) 
        {
            grade = 'C';
        } 
        else 
        {
            grade = 'F';
        }
  
    console.log(`Marks: ${marks}, Grade: ${grade}`);
  }
  
  // Test the function with different marks
  gradeStudent(95);  // Output: Marks: 95, Grade: A
  gradeStudent(85);  // Output: Marks: 85, Grade: B
  gradeStudent(65);  // Output: Marks: 65, Grade: C
  gradeStudent(45);  // Output: Marks: 45, Grade: F
  