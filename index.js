import express from "express"
const app = express()
const port = process.env.PORT||4000

app.get('/api/jokes', (req, res) => {
  const jokes=[
    {
        id:1,
        name:"rahul"
    },
    {
        id:2,
        name:"mohan"
    },
    {
      id:3,
      name:"rohan"
    }
  ]
  res.send(jokes)
})

app.listen(port, () =>            {
  console.log(`Example app listening on port ${port}`)
})