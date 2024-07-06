const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    const { a } = req.query;

    res.send(`Hola ${a || 'pepe'}`)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
