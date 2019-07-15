const gitfind = new Github;
const ui = new UI;

const search = document.getElementById('searchUser');

search.addEventListener('keyup', (e) => {
  
  const user = e.target.value;

  if(user !== ''){

    gitfind.getUser(user)
      .then(data => {
        if(data.message === 'Not Found'){
          ui.showAlert('User Could not found!', 'alert bg-danger text-white');
        } else {
          console.log(data);
          ui.showProfile(data);
          //ui.showRepos(data);          
        }
        
      })

    gitfind.getUserRepo(user)
      .then(data => {      
          ui.showRepos(data);   
       
      })

  } else {
    ui.clearProfile();
  }
  

})

