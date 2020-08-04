const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path: path.join(__dirname,'config.env')})
const app = express()



// If in production serve react build files
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'public')));

    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname, 'public', 'index.html'))
    })
}else{
    app.get("*", (request, response) => {
        response.send("Use react dev server on port 3000 to access frontend")
    })
}



const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port: ${PORT}`))