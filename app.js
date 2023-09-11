const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3000

app.use(cors())

app.use(express.json())

const conn = require("./db/conn")
conn()

//routes
const routes = require("./routes/router");

app.use("/api", routes)

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})