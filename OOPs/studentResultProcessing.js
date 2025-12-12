class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const avg = this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
    return avg;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 50) return "C";
    return "F";
  }
}

const s1 = new Student("Aman", [90, 85, 92]);
const s2 = new Student("Riya", [70, 60, 65]);
const s3 = new Student("Karan", [40, 45, 35]);

console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());
console.log(s3.name, s3.getGrade());
