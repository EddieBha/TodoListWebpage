var login, userName, userPassword;

login = document.getElementById('loginForm');
userName = document.getElementById('userName');
userPassword = document.getElementById('userPassword');

//checkLogin();

function loginPart(event) {
    event.preventDefault();
    var loginUser = userName.value;
    var loginPass = userPassword.value;

    var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

    xhr.onload = function() {// When readystate changes
        // The following conditional check will not work locally - only on a server
        if(xhr.status === 200) {                      // If server status was ok
            responseObject = JSON.parse(xhr.responseText);

            // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
            //var newContent = '';
            for (var i = 0; i < responseObject.users.length; i++) { // Loop through object
                if(responseObject.users[i].userName == loginUser && responseObject.users[i].userPassword == loginPass) {
                    console.log("Login OK");
                    console.log('OK for JSON');
                    //saveLogin(true);
                    //return true;
                    localStorage.setItem('loginSetter', 'true');
                    window.location.href = 'todoget.html';
                }
            }

            // Update the page with the new content
            //document.getElementById('content').innerHTML = newContent;

        }
    };

    xhr.open('GET', 'data/login.json', true);  // Dummy JSON Data
    //xhr.open('GET', 'http://127.0.0.1:8000/todo/', true);        // Prepare the request
    xhr.send(null);


}






login.addEventListener('submit', loginPart,false);
