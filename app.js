const express = require('express')
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

app.use(express.urlencoded({ extended: false }))

const authRouter = require('./controllers/authController');
// const ideaRouter = require('./controllers/ideaController');
const voterRouter = require('./controllers/voterController');
const candidateRouter = require('./controllers/candidateController');
const electionRouter = require('./controllers/electionController');
const resultRouter = require('./controllers/resultController')

app.use('/login', authRouter)
// app.use('/ideas', ideaRouter)
app.use('/voters', voterRouter)
app.use('/candidates', candidateRouter)
app.use('/elections', electionRouter)
app.use('/results', resultRouter)

module.exports = app;