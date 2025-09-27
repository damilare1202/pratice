//NUMBER ONE
const teacher = {
  fullName: "Ogunyakin Damilare",
  age: 30,
  subject: ["engllish", "chemistry", "mathematics", "computer"],
  classesAssigned: ["SS1", "SS2", "SS3"],
};

const { fullName, age, subject, class: classesAssigned } = teacher;

function getTeacher(fullName, subject) {
  return "My teachers name is " + fullName + " and he teaches " + subject;
}
console.log(getTeacher(fullName, subject));

//NUMBER TWO
const juniorClasses = ["JSS1", "JSS2", "JSS3"];

const seniorClasses = ["SSS1", "SSS2", "SSS3"];

const allClasses = [...juniorClasses, ...seniorClasses];
console.log(allClasses);

//NUMBER THREE
{
  function calculateAverageScores(name, ...scores) {
    let calculateAverageScores = 0;
  }
}
console.log("Damilare", 42 * 2, 100 + 95 + 90 + 85 + 30 + 20);

//NUMBER FOUR
const schoolInfo = {
  schoolName: "Ipara community senior secondary school",
  locations: "Ipara",
  establishedYear: 1987,
};
const { schoolName, locations, establishedYear } = schoolInfo;

function totalInfo(schoolName, location, establishedYear) {
  return `${schoolName}, ${locations}, ${establishedYear}`;
}
console.log(totalInfo(schoolName, locations, establishedYear));

//BONUS TASK
const studentName = [
  "Okiki",
  "Emmanuel",
  "Daniel",
  "Samuel",
  "Damilare",
  "Christiana",
];

const [firstStudent, secondStudent, ...otherStudent] = studentName;

console.log("First student", firstStudent);
console.log("Second student", secondStudent);
console.log("Other student", otherStudent);
