const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.Port || 2224
const userRouter = require('./routers/userRouter')



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/',userRouter)


app.listen(port, () => {
  console.log(`Server in port ${port}`)
  })
