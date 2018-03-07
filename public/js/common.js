var logout;
logout = document.getElementById('logoutForm');

console.log('TEst');
function checkLogin(){
    console.log('Loggar ut');
    if(localStorage.getItem('loginSetter') === 'false'){
        window.location.href = 'index.html';
    }
    else if(localStorage.getItem('loginSetter') === null){
        window.location.href = 'index.html';
    }
}

$("#logout_btn").click(function() {
    localStorage.setItem('loginSetter', 'false');
    window.location.href = 'index.html';
});



