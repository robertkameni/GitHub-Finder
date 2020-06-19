// Init Github
const gitHub = new GitHub;

// Init UI Class
const ui = new UI;

// Search Input
const searchUser = document.getElementById( 'searchUser' );

// Search Input Event Listeners
searchUser.addEventListener( 'keyup', ( event ) =>
{
    // Get input text
    const userText = event.target.value;

    if ( userText !== '' ) {
        // Make HTTP Call
        gitHub.getUser( userText )
            .then( data =>
            {
                if ( data.profile.message === 'Not Found' ) {
                    //  show alert
                    ui.showAlert( 'user not found', 'alert alert-danger' );

                } else {
                    // show the profile
                    ui.showProfile( data.profile );
                    ui.showRepos( data.repos );
                }
            } );
    } else {
        // clear the profile
        ui.clearProfile();
    }
} );