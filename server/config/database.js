const mysql = require('mysql'),
      host = process.env.DB_HOST,
      database = process.env.DB_NAME,
      user = process.env.DB_USER
      password = process.env.DB_PASS

const connection = mysql.createConnection({ host, database, user, password })

if (host && database && user) connection.connect(error => {
    if (error) return console.error(`MySQL: ${error}`)
    console.log('MySQL Connected')
})

module.exports = connection