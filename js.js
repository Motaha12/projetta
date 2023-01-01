document.getElementById("signup").addEventListener("click", verification);
function verification(){
    let username=document.forms["loggin"]["username"].value;
    let email=document.forms["loggin"]["email"].value;
    let password=document.forms["loggin"]["password"].value;
    let password2=document.forms["loggin"]["password2"].value;
    let email_pattern = /\w@\w.\w/;
    let password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*])/;
    if(username.length<3 || username.length>25){
        alert("enter a valid username \n username should be between 3 and 25 characters");
    }
    else if(!email_pattern.test(email)){
        alert("enter a valid email adress");
    }
    else if(password.length<8 || !password_pattern.test(password)){
        alert("enter a valid password \n password should be at least 8 characters long, should contain at least an uppercase character, an lowercase character, a digit and a special character ");

    }
    else if(password!=password2){
        alert("the two passwords need to match");
    }     
    else{
        window.open("index.html",'_self');
        }
} 