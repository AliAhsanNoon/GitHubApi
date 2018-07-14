class GitHub {
    constructor() {
        this.client_id = '03045e3cb5e3da6e1bf1';
        this.client_secret = '36bddfe751b081c7a85175ec61b3ca7fbff7ac18';
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repo = await repoResponse.json();
        return {
            profile,
            repo
        };
    }
}