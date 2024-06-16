// Part 3: Array with Types and Indexing - Employee Salaries
// Initialize an array of employees
var employees = [
    {
        name: "Arman",
        hoursWorked: 15,
        hourlyRate: 8,
        salary: 5000
    },
    {
        name: "Hamza",
        hoursWorked: 20,
        hourlyRate: 22,
        salary: 12000
    },
    {
        name: "Sarim",
        hoursWorked: 18,
        hourlyRate: 20,
        salary: 8000
    },
];
// Function to calculate salary for each employee
function calculateSalary(employees) {
    employees.forEach(function (employees) {
        // Calculate the salary based on hours worked and hourly rate
        employees.salary = employees.hourlyRate * employees.hoursWorked;
        // Apply 10% bonus if hours worked are 20 or more
        if (employees.hoursWorked >= 20) {
            employees.salary *= 1.1;
        }
    });
}
;
// Call the function to calculate salaries
calculateSalary(employees);
// Display the updated employee salaries 
console.log(employees);
