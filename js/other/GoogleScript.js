/**
 * Calls the helper method that handles the authentication flow.
 *
 * @param {Object} authResult An Object which contains the access token and
 *   other authentication information.
 */
function onSignInCallback(authResult) {
    helper.onSignInCallback(authResult);
}


var helper = (function() {
    var BASE_API_PATH = 'plus/v1/';

    return {
        /**
         * Hides the sign in button and starts the post-authorization operations.
         *
         * @param {Object} authResult An Object which contains the access token and
         *   other authentication information.
         */
        onSignInCallback: function(authResult) {
            gapi.client.load('plus','v1').then(function() {
                $('#authResult').html('Auth Result:<br/>');
                for (var field in authResult) {
                    $('#authResult').append(' ' + field + ': ' +
                    authResult[field] + '<br/>');
                }

                if (authResult['access_token']) {
                    $('#authOps').show('slow');
                    helper.profile();
                    helper.people();
                } else if (authResult['error']) {
                    // There was an error, which means the user is not signed in.
                    // As an example, you can handle by writing to the console:
                    console.log('There was an error: ' + authResult['error']);
                }
                console.log('authResult', authResult);
            });
        },

        /**
         * Gets and renders the currently signed in user's profile data.
         */
        profile: function(){
            var request=gapi.client.plus.people.get({
                'userId': 'me'
            });
            request.execute(function(res) {

                if (isGoogleBtnClicked()==true) {
                    console.log('Id: ' + res.id); //Google profile id
                    console.log(' Email: ' + res.emails[0].value); // User email
                    console.log(' Name: ' + res.displayName); // Name
                    console.log(' Img: ' + res.image.url); // Image 50x50 px
                    console.log(' Cover ' + res.cover.coverPhoto.url); // Cover image
                    googleBtnUnclicked();

                    //Redirect to user dashboard here!

                }
            });
        }
    };
})();


