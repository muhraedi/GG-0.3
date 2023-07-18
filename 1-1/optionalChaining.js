const students = [{ name: "Alice", age: 20}];
students.forEach(student => {
    console.log("Age", student?.age);
});

console.log("Second Student Age", students[1]?.age);