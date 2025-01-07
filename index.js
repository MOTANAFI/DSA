const studentsDatabase = ["mohamed", "erick", "John", "michael"];

const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Fount ${studentName}`);
      return
    }
  }
};

findStudent(studentsDatabase, "erick");
