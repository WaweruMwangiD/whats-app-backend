import express from 'express'

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).send("Helloo handsome")
})

app.listen(port, () => {
    console.log("Listening patiently.....")
})