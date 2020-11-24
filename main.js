

// Skapa skolobjekt

let medieinstitutet = {
    name: "Medieinstitutet",
    students: [],
    teachers: [],
    address: "Malmö vägen 123",
    zipCode: "123321",
    city: "Malmö"
}


// Skapa tre stycken olika ämnen inneha name, students, teacher

let matematik = {
    name: "Matematik",
    students: [],
    teacher: []
}


let svenska = {
    name: "Svenska",
    students: [],
    teacher: []
}


let engelska = {
    name: "Engelska",
    students: [],
    teacher: []
}

// Skapa fem stycken studenter, egenskaper name, age,gender och subjects

let olle = {
    name: "Olle",
    age: 32,
    gender: "Male",
    subjects: []
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
    subjects: []
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
    addSubject: function (subject){
        this.subjects.push(subject);
        return this;
    }
}

let niklas = {
    name: "Niklas",
    subjects: []

}
console.log(peter);