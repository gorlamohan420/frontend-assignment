
var fruits = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
function displayFruits() {
    document.getElementById("fruits").innerHTML = "Fruits: " + fruits.join(", ");
}
function sortFruits() {
    fruits.sort(function(a, b) {
        return b.localeCompare(a); 
    });
    displayFruits(); 
}
displayFruits();
