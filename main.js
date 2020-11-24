

// Skapa skolobjekt

let medieinstitutet = {
    name: "Medieinstitutet",
    students: [],
    teachers: [],
    address: "Malmö vägen 123",
    zipCode: "123321",
    city: "Malmö",
    fireTeacher: function (quit){
        this.teachers = this.teachers.filter(q => q !== quit);
        return this;
    }
}


// Skapa tre stycken olika ämnen inneha name, students, teacher

let matematik = {
    name: "Matematik",
    students: [],
    teacher: [],
    addTeacher: function (teacher){
        this.teacher.push(teacher);
        peter.subjects = this;
        return this;
    },
    removeTeacher: function (quit){
        this.teacher = this.teacher.filter(q => q !== quit);
        return this;
    }
}


let svenska = {
    name: "Svenska",
    students: [],
    teacher: [],
    addStudent: function(student){
        this.students.push(student);
        return this;
    },
    relegateStudent: function (remove){
        this.students = this.students.filter(r => r !== remove);
        return this;
    }
}


let engelska = {
    name: "Engelska",
    students: [],
    teacher: [],
    addStudent: function(student){
        this.students.push(student);
        return this;
    }
}

// Skapa fem stycken studenter, egenskaper name, age,gender och subjects

let olle = {
    name: "Olle",
    age: 32,
    gender: "Male",
    subjects: [],
    enlistToSubject: function(subject) {
        this.subjects.push(subject);
        return this;
    }
}

let karin = {
    name: "Karin",
    age: 30,
    gender: "Female",
    subjects: []
}

let kalle = {
    name: "Kalle",
    age: 25,
    gender: "Male",
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
        return this;
    },
    quitSubject: function(quit){
        this.subjects = this.subjects.filter(p => p !== quit);
        return this;
    }

}


let maria = {
    name: "Maria",
    age: 22,
    gender: "Female",
    subjects: []
}

let alex = {
    name: "Alex",
    age: 48,
    gender: "Male",
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
        return this;
    }
}

// Skapa två lärare, egenskaper name och subjects

let peter = {
    name: "Peter",
    subjects: [],
    addSubjectToTeacher: function (subject){
        this.subjects.push(subject);
        medieinstitutet.teachers = this;
        svenska.teacher = this;
        return this;
    }
}

let niklas = {
    name: "Niklas",
    subjects: []

}
