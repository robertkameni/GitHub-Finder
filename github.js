class GitHub
{
    constructor()
    {
        this.clientt_id = '7bb9821e8ea339021087';
        this.client_secret = '64cf73ac370b9203d73c9bd611d1b6a9b20d2a68';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser ( user )
    {
        const profileResponse = await fetch( `https://api.github.com/users/${ user }?client_id=${ this.client_id }&client_secret=${ this.client_secret }` );

        const repoResponse = await fetch( `https://api.github.com/users/${ user }/repos?per_page=${ this.repos_count }&sort=${ this.repos_sort }&client_id=${ this.client_id }&client_secret=${ this.client_secret }` );

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}