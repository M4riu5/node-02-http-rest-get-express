'use strict';
console.log('server.js');

const { response } = require('express');
// importuojam express
const express = require('express')
const cors = require('cors')

// sukuriam back-end aplikacija / serveri
const app = express()

// cia iesko kuris portas laisvas
// const PORT = process.env.PORT || 3000

// middleware
app.use(cors())

// routes
// app[method]([endpoint/url], functionToHandle)
app.get('/', (request, response)=> {
    response.send('<h1>hello express framework</h1>')
})
// About
app.get('/about', (request, response)=> {
    response.send('<h1>hello from about page</h1>')
})
// Contacts
app.get('/contacts', (request, response)=> {
    response.send('<h1>hello from contact page</h1>')
})
// get /api/users
const users = [
    {
        id: 1,
        name: 'James',
        town: 'London'
    },
    {
        id: 2,
        name: 'Jill',
        town: 'Kaunas'
    }
]
app.get('/api/users', (req, resp)=> {
    resp.json(users)
})
//404 page 
app.use((req, res , next)=>{
    res.status(404).json({msg: '<p>NO page</p>'})
})
// paleidziam serveri
app.listen(3000, () => console.log('server is running on ports 3000'))