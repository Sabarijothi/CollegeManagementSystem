
function checkSession(){
    let userSession = sessionStorage.getItem("STUDENT");
    if(userSession == null){
        window.location.href = "./studentlogin.html";
    }
}

function logoutUser(){
    sessionStorage.removeItem('STUDENT');
    window.location.href = "./studentlogin.html";
}