// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;     
    }
    
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
  }
  


  class Instructor extends Person {
    constructor(child) {
      super(child);
      this.specialty = child.specialty;
      this.favLanguage = child.favLanguage;
      this.catchPhrase = child.catchPhrase;
    }
    demo(subject) {
      console.log(`Today we are learning about ${subject}`);
    }
    grade() {
      console.log(`${student.name} receives a perfect score on ${subject}`);
    }
  }
  

  class Student extends Person {
    constructor(studentAttributes) {
      super(studentAttributes);
      this.previousBackground = studentAttributes.previousBackground;
      this.className = studentAttributes.className;
      this.favSubjects = studentAttributes.favSubjects;
    }
    listSubjects() {
      //list subjects one by one
    }
    PRAssigment(subject) {
      console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
      console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
  }
  

  class ProjectManager extends Instructor {
    constructor(pmAttributes) {
      super(pmAttributes);
      this.gradClassName = pmAttributes.gradClassName;
      this.favInstructor = pmAttributes.favInstructor;
    }
    standup(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
      console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }
  }
  

  const fred = new Instructor({
    name: "Bobby",
    location: "Haynes",
    age: 33,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Full-Stack",
    catchPhrase: `Easy never conquered anything`
  });