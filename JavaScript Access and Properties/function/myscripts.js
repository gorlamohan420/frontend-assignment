function greet(name, greeting) {
    return greeting + ", " + name + "!";
}
var result1 = greet.call(null, "John", "Hello");
document.getElementById("result").innerHTML += "Using call(): " + result1 + "<br>";
var result2 = greet.apply(null, ["Jane", "Hi"]);
document.getElementById("result").innerHTML += "Using apply(): " + result2;