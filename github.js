class Github {
  constructor(){
    this.clientId = 'daca75e44aeab440f9f4';
    this.clientSecret = 'f31f88be71b9d0a7f2cc8df3750516ccb9fbe9a8';
    this.reposCount = 5;
    this.repoSort = 'created: asc'
  }

  getUser(user){
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .then(err => reject(err))

      })

      const userRepos = fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.repoSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .then(err => reject(err))
  }

  getUserRepo(user){
    return new Promise((resolve, reject) => {
     fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.repoSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .then(err => reject(err))

      })

      
  }
}