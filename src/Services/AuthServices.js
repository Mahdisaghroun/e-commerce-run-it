
import axios from 'axios'
export const registerService = (username, password, email) => {
      var data = JSON.stringify({ "userName": username, "passwordHash": password, "email": email });
      console.log(data)
      var config = {
            method: 'post',
            url: 'http://ed1f321ae5a3.ngrok.io/api/users/register',
            headers: {
                  'Content-Type': 'application/json'
            },
            data: data
      };
      return axios(config)


}
export const loginService = (username, password) => {
      var data = JSON.stringify({ "username": username, "password": password });
      var config = {
            method: 'post',
            url: 'http://ed1f321ae5a3.ngrok.io/login',

            data: data
      };
      return axios(config)
}







