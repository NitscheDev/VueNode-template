const express = require('express'),
      cors = require('cors'),
      cookieParser = require('cookie-parser')

//to be able to use enviroment vaiables
require('dotenv').config()
//init our express app
const app = express()

//middlewares
const options = require('./config/options')
app.use(cookieParser(options.cookie_parser))
   .use(cors(options.cors))
   .use(express.json(options.express_json))
   .use(express.urlencoded(options.express_url))

//routes
app.use('/', require('./routes/main'))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

//production setup
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(__dirname + '/public/'))
    //vue.js SPA setup
	app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'))
}