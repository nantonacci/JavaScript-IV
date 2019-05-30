// CODE here for your Lambda Classes

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

class Instructors extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Students extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    console.log(`all of the student's favoriteSubjects one by one`);
  }

  PRAssignment() {
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge() {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManagers extends Instructors {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(slackChannel) {
    console.log(
      `${name} announces to ${slackChannel}, @channel standy times!​​​​​`
    );
  }

  debugsCode(studentObj, subject) {
    console.log(`${name} debugs ${student.name}'s code on ${subject}​​​​​`);
  }
}
