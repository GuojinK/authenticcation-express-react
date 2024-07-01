const express = require("express")
const session = require("express-session")
const cors = require("cors")
const userRoute = require("./routes/user.route");
const errHandler = require("./middlewares/handlers/err.handler");
const responseHandler = require("./middlewares/handlers/response.handler");

const app = express()
const port = process.env.PORT || 8080



// middlewares
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge:30000
    }
}))
app.use(responseHandler)

// routes
app.use("/api/user",userRoute)
app.use(errHandler)

// server running 
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})