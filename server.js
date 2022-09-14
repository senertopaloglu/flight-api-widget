const PORT = 8000
const axios = require("axios").default

const express = require('express') // require express to store root
const app = express()

const cors = require('cors')
require('dotenv').config()
app.use(cors())

app.get('/flights', (req, res) => { // relative to localhost:8000
    const options = {
        method: 'GET',
        url: 'https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/Arrivals',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'madrid-barajas-airport-flights.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.json(response.data.slice(0, 6)) // get the 6 flights landing soonest
    }).catch(function (error) {
        console.error(error);
    });
})

app.listen(PORT, () => console.log('running on PORT ' + PORT))


