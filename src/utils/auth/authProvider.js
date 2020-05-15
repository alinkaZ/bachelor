// in src/authProvider.js
let json = require("./auth.json");
console.log(json);

const rand = () => {
  return Math.random().toString(36).substr(2);
}

const token = () => {
  return rand() + rand();
}

//console.log(token());


const authProvider = {
    login: (login, pass) =>  {
        if(json.find((data) => {
          return data.email === login && data.pass === pass;
        })){
          console.log("success!");
          localStorage.setItem('sessionToken', token());
          return true;
        } else {
          console.log("login fail!");
          return false;
        }

        // const request = new Request('https://mydomain.com/authenticate', {
        //     method: 'POST',
        //     body: JSON.stringify({ username, password }),
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        // });
        // return fetch(request)
        //     .then(response => {
        //         if (response.status < 200 || response.status >= 300) {
        //             throw new Error(response.statusText);
        //         }
        //         return response.json();
        //     })
        //     .then(({ token }) => {
        //         localStorage.setItem('token', token);
        //     });
    },
    // ...
};

export default authProvider;
