
// Function to set a cookie
function setCookie(name="accessToken", value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Example usage
setCookie("accessToken", "yourAccessTokenValue", 7); // Sets a cookie named "accessToken" with the value "yourAccessTokenValue" that expires in 7 days
setCookie("refreshToken", "yourRefreshTokenValue", 7); // Sets a cookie named "refreshToken" with the value "yourRefreshTokenValue" that expires in 7 days

export {setCookie}





