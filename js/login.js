document.getElementById('login-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if(userEmail === 'baap@beta.com' && userPassword === 'baaperbank'){
        window.location = "bank.html"
    }
    else{
        alert("Please enter a valid email and password")
    }
})