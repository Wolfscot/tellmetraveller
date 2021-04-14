const baseUrl = `http://localhost:5000/api/user/`

const userService = {   

    register: function (data) {
      return fetch(`${baseUrl}/register`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json());
    },
  
    login: function (data) {
      return fetch(`${baseUrl}/login`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      }).then(res => res.status === 200 ? res.json() : res.text());
    },
  
    logout: function () {
      return fetch(`${baseUrl}//logout`, {
        method: 'POST',
        credentials: 'include'
      }).then(res => res.text());
    }
  
  };
  
  export default userService;