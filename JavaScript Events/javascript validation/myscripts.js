function validateForm() {
    var inputValue = document.getElementById("textInput").value;
    if (inputValue === "") {
        alert("Please enter some text.");

        return false;
    }
    
    return true;
}