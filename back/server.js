require('dotenv').config()
const app = require('./app/app')

app.listen('4000', error => {
  if (error) return console.log(`Error at listening port: 4000`, error)
  console.log(`Server running on port: 4000`)
})
