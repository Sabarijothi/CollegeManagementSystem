
function checkSession() {
    let userSession = sessionStorage.getItem("ADMIN");
    if (userSession == null) {
        window.location.href = "./Adminlogin.html";
    }
}

function logoutUser() {
    sessionStorage.removeItem('ADMIN');
    window.location.href = "./Adminlogin.html";
}
