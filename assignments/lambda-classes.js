// CODE here for your Lambda Classes

//Person: parent class
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

//Instructor: child of Person
class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  //stretch
  changeGrade(student) {
    let value = Math.floor(Math.random() * 100) + 1;
    console.log(student.grades + value);
  }
}

//Student: child of Person
class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;

    //stretch
    this.grades = attributes.grades;
  }

  listsSubjects() {
    this.favSubjects.forEach(function(item) {
      console.log(item);
    });
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    if (this.grades > 70) {
      console.log(`Congrats, grad!`);
    } else {
      console.log(`Keep studying!`);
    }
  }
}

//ProjectManager: child of Instructor
class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(slackChannel) {
    console.log(
      `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`
    );
  }

  debugsCode(student, subject) {
    console.log(
      `${this.name} debugs ${student.name}'s code on ${subject}​​​​​`
    );
  }
}

//new Person, Jon
const jon = new Person({ name: 'Jon', age: 25, location: 'Poughkeepsie' });

//tests for Jon
console.log(jon);
jon.speak();

//new Student, Pavithra
const pavithra = new Student({
  name: 'Pavithra',
  age: 29,
  location: 'Renton',
  previousBackground: 'Medical Billing Specialist',
  className: 'WebPT7',
  favSubjects: ['HTML', 'CSS', 'JavaScript', 'Python'],
  grades: 80
});

//tests for Pavithra
console.log(pavithra);
pavithra.listsSubjects();
pavithra.PRAssignment('JavaScript');
pavithra.sprintChallenge('JavaScript');

//stretch
console.log(pavithra.grades);

//new Instructor, Sally
const sally = new Instructor({
  name: 'Sally',
  age: 37,
  location: 'Alamo',
  specialty: 'JavaScript',
  favLanguage: 'JavaScript',
  catchPhrase: `JavaScript? More like LavaScript! Cause it's hot! ...right guys?`
});

//tests for Sally
console.log(sally);
sally.demo('LavaScript');
sally.grade(pavithra, 'JavaScript');

//stretch
sally.changeGrade(pavithra);
pavithra.graduate();

//new ProjectManager, Sato
const sato = new ProjectManager({
  name: 'Sato',
  age: 40,
  location: 'Boseman',
  specialty: 'Front End',
  favLanguage: 'CSS',
  catchPhrase: `Don't be afraid! CSS is your friend!`,
  gradClassName: 'Web42',
  favInstructor: 'Sally'
});

//tests for Sato
console.log(sato);
sato.standUp('webpt7_sato');
sato.debugsCode(pavithra, 'CSS');
sato.demo('Flexbox');
sally.grade(pavithra, 'Flexbox');
