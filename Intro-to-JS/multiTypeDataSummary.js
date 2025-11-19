let name = "Abhinav";           
let age = 20;                   
let isStudent = true;           
let hobbies = ["coding", "music", "gaming"];  
let address = { city: "Mathura", country: "India" }; 
let score = null;               
let pendingTask;                

let report = [
    {
        label: "Name",
        value: name,
        type: typeof name
    },
    {
        label: "Age",
        value: age,
        type: typeof age
    },
    {
        label: "Is Student",
        value: isStudent,
        type: typeof isStudent
    },
    {
        label: "Hobbies",
        value: hobbies,
        type: Array.isArray(hobbies) ? "array" : typeof hobbies
    },
    {
        label: "Address",
        value: address,
        type: typeof address
    },
    {
        label: "Score",
        value: score,
        type: typeof score  
    },
    {
        label: "Pending Task",
        value: pendingTask,
        type: typeof pendingTask
    }
];

console.table(report);
