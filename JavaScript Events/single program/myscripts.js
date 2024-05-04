function setCookie() {
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
    console.log("Cookie set successfully.");
}

function getCookie() {
    var cookies = document.cookie.split("; ");
    console.log("All cookies:", cookies);
}
function checkCookie() {
    var username = getCookieByName("username");
    if (username) {
        console.log("Cookie 'username' exists with value:", username);
    } else {
        console.log("Cookie 'username' does not exist.");
    }
}
function getCookieByName(name) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var parts = cookie.split("=");
        if (parts[0] === name) {
            return decodeURIComponent(parts[1]);
        }
    }
    return null;
}