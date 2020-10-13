const BASE_URL = './api/things';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(thing) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(thing)
  }).then(res => res.json());
}

export function update(thing) {
  return fetch(`${BASE_URL}/${thing._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(thing)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}