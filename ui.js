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
        <img src="${user.profile.avatar_url}" class="img-fluid mb-2">
        <a href="${user.profile.html_url}" class="btn btn-primary btn-block mb-4" target="_blank">View Profile</a>
      </div>
      <div class="col-md-9">

        <span class="badge badge-primary">Public Repos: ${user.profile.public_repos}</span>
        <span class="badge badge-secondary">Public Gists: ${user.profile.public_gists}</span>
        <span class="badge badge-success">Followers: ${user.profile.followers}</span>
        <span class="badge badge-info">Following: ${user.profile.following}</span>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.profile.company}</li>
          <li class="list-group-item">Website/Blog: ${user.profile.blog}</li>
          <li class="list-group-item">Location: ${user.profile.location}</li>
          <li class="list-group-item">Memeber Since: ${user.profile.created_at}</li>
        </ul>

      </div>
    </div>
  </div>
   
  <h3 class="page-heading mb-3">Public Repos</h3>
  <div id="repos"></div>
  `
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
    },3000)
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