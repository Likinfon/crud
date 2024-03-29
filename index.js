const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const app = express();
const path = require('path')


dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080; 

app.use(morgan('tiny'))

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, "views/ejs"))

app.use('/css', express.static(path.resolve(__dirname, '/assets/css')))
app.use('/img', express.static(path.resolve(__dirname, '/assets/img')))
app.use('/js', express.static(path.resolve(__dirname, '/assets/js')))

app.get('/', (req, res) => {
    res.render('index')
}) 

// app.get('/', (req, res) =>{
//     res.send('Crud Азиза')
// })

app.listen(3000,() => {
    console.log('Азиз попущен на' + ' ' + PORT + ' ' + 'Портов')
})