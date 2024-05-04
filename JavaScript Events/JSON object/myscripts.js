var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

var fullName = person.firstName + " " + person.lastName;
var age = person.age;
var email = person.email;

var resultElement = document.getElementById("result");
resultElement.innerHTML = "Full Name: " + fullName + "<br>";
resultElement.innerHTML += "Age: " + age + "<br>";
resultElement.innerHTML += "Email: " + email;