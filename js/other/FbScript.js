/**
 * Created by Chaitanya on 02-01-2015.
 */


function statusChangeCallback(response,type) {

    console.log(response);
     if (response.status === 'connected') {
        updateFacebookDetails(response,type);

    } else if (response.status === 'not_authorized') {
       /* document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';*/
    } else {
        /*document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';*/
    }
}

function checkLoginState() {
    FB.login(function(response) {
        statusChangeCallback(response,"login");
    },{scope:'public_profile,email'});
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
    });

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response,"loginStatus");
    });

};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function updateFacebookDetails(response,type) {

    FB.api('/me', function(response) {
        window.fb_userId=response.id;
        window.fb_userEmail=response.email;
        window.fb_userFullName=response.name;
    });
    window.fb_userAccessToken=response.authResponse.accessToken;
    window.fb_tokenExpiration=response.authResponse.expiresIn;
    if(type=="login")
    {
        //Redirect to user dashboard here!
        console.log('Facebook details-> ' +
        'user id: '+window.fb_userId+
        ' email: '+window.fb_userEmail+
        ' full name: '+window.fb_userFullName+
        ' access token'+window.fb_userAccessToken+
        ' expires at'+window.fb_tokenExpiration);
    }
}