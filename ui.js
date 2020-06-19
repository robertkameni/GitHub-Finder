class UI
{
    constructor()
    {
        this.profile = document.getElementById( 'profile' );
    }

    // Display profile in UI
    showProfile ( user )
    {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url }">
                        <a href="${user.html_url }" target="_blank" class="btn btn-block mb-8 btn-profile">view profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos }</span>
                        <span class="badge badge-secondary">Public Gist: ${user.gist }</span>
                        <span class="badge badge-success">Followers : ${user.followers }</span>
                        <span class="badge badge-info">Following: ${user.following }</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">
                                Company: ${user.company }
                            </li>
                            <li class="list-group-item">
                                Website/Blog: ${user.blog }
                            </li>
                            <li class="list-group-item">
                                Location: ${user.location }
                            </li>
                            <li class="list-group-item">
                                Member since: ${user.created_at }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repositories</h3>
            <div id="repos"></div>
        `;
    }

    // Show alert
    showAlert ( message, className )
    {
        // clear any remaining alert
        this.clearAlert();
        // Create a div
        const div = document.createElement( 'div' );
        // Add className
        div.className = className;
        // Add text
        div.appendChild( document.createTextNode( message ) );
        // Get parent
        const container = document.querySelector( '.searchContainer' );
        // Get searchBox
        const search = document.querySelector( '.search' );
        // insert the alert
        container.insertBefore( div, search );

        // TimeOut after 3s
        setTimeout( () =>
        {
            this.clearAlert();
        }, 2500 );
    }

    // Show Repos
    showRepos ( repo )
    {
        let output = '';

        repo.forEach( function ( repos )
        {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url }" target="_blank">${ repos.name }</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repos.stargazers_count }</span>
                        <span class="badge badge-secondary">Watchers: ${repos.watchers_count }</span>
                        <span class="badge badge-success">Forks : ${repos.forks_count }</span>
                        </div>
                    </div>
                </div>
            `;
        } );

        // Output the repositories
        document.getElementById( 'repos' ).innerHTML = output;
    }

    // Clear alert message
    clearAlert ()
    {
        const currentAlert = document.querySelector( '.alert' );

        if ( currentAlert ) {
            currentAlert.remove();
        }
    }

    // clear Profile
    clearProfile ()
    {
        this.profile.innerHTML = '';
    }
}