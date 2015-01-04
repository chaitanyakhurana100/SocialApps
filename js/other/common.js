/**
 * Created by SWATI BHALLA on 31-12-2014.
 */

function signUpPage(){

        location.href = "#/signUp";
}

function submitSignUp(){
    if(validateEmail() && validatePassword()){
        $("#signUpForm").attr('action','php/signUp.php');
    }
}


function validateEmail(){
    $("#error_email_signup").html('');
    var email = $("#email_id_signup").val();
    var at_pos = email.indexOf("@");
    var dot_pos = email.lastIndexOf(".");
    var errorMsg = "";
    if($.trim(email)==""){
        errorMsg = "* Enter your email id";
    }else if(at_pos <1 || dot_pos<at_pos+2 || dot_pos+2>email.length){
        errorMsg = "* Invalid email address"
    }
    if(errorMsg!=""){
        $("#error_email_signup").html(errorMsg);
        return false;
    }else{
        return true;
    }


}

function validatePassword(){
    $("#error_password_signup").html('');
    var password = $("#password_signup").val();
    var errorMsg="";
    var exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if($.trim(password)==""){
        errorMsg="* Please enter a password";
    }
    else if(!password.match(exp)){
        errorMsg="* Please enter a password with 6 to 20 characters, having atleast 1 digit, one lower case character and one upper case chaeacter"
    }
    if(errorMsg!=""){
        $("#error_password_signup").html(errorMsg);
        return false;
    }else{
        return true;
    }

}

function render() {
    gapi.signin.render('googleSignIn', {
        'callback': 'onSignInCallback',
        'clientid': '',
        'cookiepolicy': 'single_host_origin',
        'requestvisibleactions': 'http://schema.org/AddAction',
        'scope': 'https://www.googleapis.com/auth/plus.login ' +
        'https://www.googleapis.com/auth/plus.me '+
        'https://www.googleapis.com/auth/userinfo.email '+
        'https://www.googleapis.com/auth/userinfo.profile '+
        ' https://www.googleapis.com/auth/plus.profile.emails.read'
    });

    gapi.signin.render('googleSignUp', {
        'callback': 'onSignInCallback',
        'clientid': '',
        'cookiepolicy': 'single_host_origin',
        'requestvisibleactions': 'http://schema.org/AddAction',
        'scope': 'https://www.googleapis.com/auth/plus.login ' +
        'https://www.googleapis.com/auth/plus.me '+
        'https://www.googleapis.com/auth/userinfo.email '+
        'https://www.googleapis.com/auth/userinfo.profile '+
        ' https://www.googleapis.com/auth/plus.profile.emails.read'
    });
}

function isGoogleBtnClicked(){
    return window.googleBtnClicked;
}

function googleBtnClicked(){
    window.googleBtnClicked=true;
}

function googleBtnUnclicked()
{
    window.googleBtnClicked=false;
}

