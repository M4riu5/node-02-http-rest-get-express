'use strict'
console.log('main');

// kreiptis ir gauti users is back end
const backEndUrl = 'http://localhost:3000/api/users'

async function getUsers() {
    const resp = await fetch(backEndUrl)
    const dataInJs = await resp.json()
    console.log('dataInJs ---->', dataInJs);
}
getUsers()