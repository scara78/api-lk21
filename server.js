const express = require('express');
const app = express();
const cors = require('cors')
const getJSON = require('./scraper/scraper')

app.use(cors({ origin: '*' }))

app.set('json spaces', 2)

app.get('/', function (req, res) {
    res.json({ error: "Silahkan baca dokumentasi di https://github.com/devnazir/api-lk21/#readme" })
})

app.get('/newupload', function (req, res) {
    const numPage = req.query.hasOwnProperty('page') ? req.query.page : 1
    let url = `https://lk21online.online/page/${numPage}/`
    getJSON(res, url, numPage)
})

app.get('/comingsoon', function (req, res) {
    const numPage = req.query.hasOwnProperty('page') ? req.query.page : 1
    let url = `https://45.134.21.109/coming-soon/page/${numPage}`
    getJSON(res, url, numPage)
})

app.get('/tv', function (req, res) {
    const numPage = req.query.hasOwnProperty('page') ? req.query.page : 1
    let url = `https://45.134.21.109//tv-series/page/${numPage}`
    getJSON(res, url, numPage)
})

app.get('/year', function (req, res) {
    const numPage = req.query.hasOwnProperty('page') ? req.query.page : 1
    const year = req.query.year
    let url = `https://45.134.21.109/year/${year}/page/${numPage}`
    getJSON(res, url, numPage)
})

app.get('/country', function (req, res) {
    const numPage = req.query.hasOwnProperty('page') ? req.query.page : 1
    const country = req.query.country
    let url = `https://45.134.21.109/country/${country}/page/${numPage}`
    getJSON(res, url, numPage)
})

app.get('/genre', function (req, res) {
    const numPage = req.query.hasOwnProperty('page') ? req.query.page : 1
    const genre = req.query.genre
    let url = `https://45.134.21.109/${genre}/page/${numPage}`
    getJSON(res, url, numPage)
})

app.get('/search', function (req, res) {
    const numPage = req.query.hasOwnProperty('page') ? req.query.page : 1
    const query = req.query.query

    let url = `https://45.134.21.109/page/${numPage}/?s=${query}`
    getJSON(res, url, numPage)
})

app.get('*', function (req, res) {
    res.json({ Error: "Parameter yang anda masukan salah" })
})

app.listen(process.env.PORT || 8000, () => console.log('Server work at localhost:8000'))
