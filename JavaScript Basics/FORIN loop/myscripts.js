var person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}
