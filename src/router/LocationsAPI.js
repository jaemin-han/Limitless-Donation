const api = 'http://localhost:5001'

let token = localStorage.token

if(!token) 
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getAll = () => 
    fetch(`${api}/orgData`, { headers })
        .then(res => res.json())
        .then(data => data.locations)

export const remove = (location) =>
    fetch(`${api}/orgData/${location.id}`, { method: 'DELETE', headers })
        .then(res => res.json())
        .then(data => data.location)

export const create = (body) =>
    fetch(`${api}/orgData`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
