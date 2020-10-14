 import tokenService from './tokenService';
 const BASE_URL = '/api/spoonacular/recipe';


 export default {
    getAll
 }

function getAll() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }})
  .then(res => res.json());
}