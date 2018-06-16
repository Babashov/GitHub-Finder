class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }
  // Display Profile
  showProfile(user)
  {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img src="${user.avatar_url}" class="img-fluid mb-2">
        <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank">View Profile</a>
      </div>
      <div class="col-md-9">

        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success">Followers: ${user.followers}</span>
        <span class="badge badge-info">Following: ${user.following}</span>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Memeber Since: ${user.created_at}</li>
        </ul>

      </div>
    </div>
  </div>
   
  <h3 class="page-heading mb-3">Public Repos</h3>
  <div id="repos"></div>
  `
  }

  // Show User's Repos
  showRepos(repos)
  {
    let output = '';
    repos.forEach((repo)=>{
      output += `
      
      <div class="card card-body mb-2">
        <div class="row">

          <div class="col-md-6">

            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          
          </div>
          <div class="col-md-6">
          
          <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          
          </div>
          </div>
      </div>
      
      `
    });

    document.getElementById('repos').innerHTML = output;
  }

  // Show Alert Message
  showAlert(msg,className)
  {
    // Clear Alert Message Method
    this.clearAlert();
    // Create Div Element
    const div = document.createElement('div');
    // Set ClassName To Div Element
    div.className = className;
    // Set Text To Div Element
    div.appendChild(document.createTextNode(msg));
    // Get Parent    
    const searchContainer = document.querySelector('.searchContainer');
    // Get Search Box
    const search = document.querySelector('.search');
    // Insert Alert Div in $searchContainer before $search div
    searchContainer.insertBefore(div,search);

    // Set Time out To clearAlert() method
    setTimeout(()=>{
      this.clearAlert()
    })
  }

  // Clear Alert Message
  clearAlert()
  {
    // Get Current Alert Message
    const currentAlert = document.querySelector('.alert');
    // remove $currentAlert Element From DOM
    if(currentAlert)
    {
      currentAlert.remove();
    }
  }

  // Clear Profile
  clearProfile()
  {
    this.profile.innerHTML = '';
  }
}