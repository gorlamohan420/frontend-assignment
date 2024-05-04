function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function() {
    return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
}
var john = new Person("John", 30);
document.getElementById("result").textContent = john.sayHello();