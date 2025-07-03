import axios from 'axios';

const URL = 'https://form-dashboard-backend.cyclic.app';  // using proxy in package.json to avaoid cors policy error

export const registerUser = async ( user ) => {
   try {
    return await axios.post(`${URL}/register`, user);
   } catch (error) {
    console.log('error while calling registerUser',error);
   }
}

export const loginUser = async ( data ) => {
  try {
    return await axios.post(`${URL}/signin`, data);
  } catch (error) {
    console.log('error while calling loginUser',error);
  }
}

export const getUsers = async () => {
  try {
    let response = await axios.get(`${URL}/getUsers`);
    return response.data;
  } catch (error) {
    console.log('error while calling getUsers',error);
  }
}
