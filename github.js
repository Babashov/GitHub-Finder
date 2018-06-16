class GitHub{
  constructor(){
    this.client_id = '152768b6cf0988c8f0bd';
    this.client_secret = '8554ffc66cd5fa5ea6067f79beb333b7bbc90f61';
    this.repo_per_page = 5;
    this.repo_sort = 'created: asc';
  }
  async getUser(user)
  {
    // Response Github Profile
    const res = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const resRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_per_page}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await res.json();
    const repos = await resRepo.json();

    return{
      profile,
      repos
    }
  }
}