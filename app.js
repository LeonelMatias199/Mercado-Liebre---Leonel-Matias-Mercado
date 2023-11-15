const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT||3000



app.use(express.static(path.join(__dirname, 'Public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views/login.html'))
});

app.listen(port, () => { console.log(`Servidor corriendo en http://localhost:${port}`)})
