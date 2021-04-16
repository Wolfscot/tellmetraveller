const baseUrl = `http://localhost:5000/api/user/`

const userService = {   
  get: function () {
    return fetch(`${baseUrl}`)
    
    .then(res => res.json());
  },
  
    register: function (data) {
      return fetch(`${baseUrl}/register`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json())
      .catch(e => {console.log(e)});
    },
  
    login: function (data) {
      return fetch(`${baseUrl}/login`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      }).then(res => res.json())
      .catch(e => {console.log(e)});
    },
  
    logout: function () {
      return fetch(`${baseUrl}//logout`, {
        method: 'POST',
        credentials: 'include'
      }).then(res => res.text());
    }
  
  };
  
  export default userService;