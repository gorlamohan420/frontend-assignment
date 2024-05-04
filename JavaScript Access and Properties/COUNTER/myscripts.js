function incrementCounter() {
    var counterElement = document.getElementById("counter");
    var currentCount = parseInt(counterElement.textContent);
    var newCount = currentCount + 1;
    counterElement.textContent = newCount;
}