const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world from a Node.js app!')
})

app.get('/teste', (req, res) => {
    res.json({ message: "Update image docker" })
})


app.get('/another', (req, res) => {
    res.json({ message: "New version deployed now" })
})


app.listen(80, () => {
    console.log('Server is up on 3000')
})