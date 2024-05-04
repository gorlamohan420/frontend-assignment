var dateButton = document.getElementById("dateButton");
dateButton.addEventListener("click", function() {
    var currentDate = new Date();
    var dateTimeString = "Current Date and Time: " + currentDate.toLocaleString();
    var dateTimeElement = document.getElementById("dateTime");
    dateTimeElement.textContent = dateTimeString;
    var dateTimeElement = document.getElementById("dateTime");
    dateTimeElement.textContent = dateTimeString;
});