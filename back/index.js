const app = require("./src/server")
const { Dbconnect } = require("./src/Config/connect.js")


const PORT = 3000
//app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))

Dbconnect()

.then (() => {
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
})

.catch((error) => {
    console.log("algo salio mal", error)
}) 

