import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080/groceryshop';
axios.defaults.headers['Content-Type'] = 'application/json';

export function get(url, params={}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then(response => {
        resolve(response.data)
      })
      .catch(err => reject(err))
  })
}

export function post(url, data={}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}
