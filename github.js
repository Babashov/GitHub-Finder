class GitHub{
  constructor(){
    this.client_id = '152768b6cf0988c8f0bd';
    this.client_secret = '8554ffc66cd5fa5ea6067f79beb333b7bbc90f61';
  }
  async getUser(user)
  {
    const res = await fetch('https://api.github.com/users/Babashov');
    const profile = await res.json();

    return{
      profile
    }
  }
}