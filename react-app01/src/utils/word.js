


export class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    say() {
        return this.name+"天道酬勤、、、"
    }
}

Person.hobby = ["lol", "nba"];



export class Student extends Person{
    constructor(name, age, score) {
        super(name, age);
        this.score = score;
    }
    say() {
        return this.name + this.age + super.say();
    }
}

Student.habby = ["walk"];
var s1 = new Student("小怡子", "24", "90");

console.log(s1.say());
