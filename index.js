const express = require('express')
const app = express()
const port = 5000

app.get('/',(req, res) => {
    res.send("Hello my World!")
})

app.listen(port, () => {
    console.log('We are listening from port ${port}')
})