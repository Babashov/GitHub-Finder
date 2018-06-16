// Init GitHub Class
const github = new GitHub;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup',(e)=>{

  // Get Input Text
  const userText = e.target.value;

  if(userText !== '')
  {
    github.getUser(userText)
      .then(data=>console.log(data));
  }
})