// Init GitHub Class
const github = new GitHub;
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup',(e)=>{

  // Get Input Text
  const userText = e.target.value;

  if(userText !== '')
  {
    github.getUser(userText)
      .then(data=>{        
        if(data.profile.message === 'Not Found')
        {
          // Alert "Not Found Any User"
            ui.showAlert('User not found','alert alert-danger');
        }else{

          // Clear Alert Message
          ui.clearAlert();
          // Show Data
          ui.showProfile(data);
        }
      });
  }else{
    // Clear Alert Message
    ui.clearAlert()
    // Clear Profile
    ui.clearProfile();

  }
})