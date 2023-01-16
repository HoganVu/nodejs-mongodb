const express = require('express')
const mongoose = require('mongoose')
const app = express()


mongoose
    .connect(
        "mongodb+srv://cluster0.ark1rvc.mongodb.net/?retryWrites=true&w=majority/express-posts",
        {
            dbName:'express-posts',
            user:'hoang2292000',
            pass:'0Ka5nZO1bRGugc6C',
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => {
        console.log("Mongodb connected");
    })

const ProductRoute = require('./Routes/product.route')

app.use('/products', ProductRoute)

app.use((req,res,next) => {
    const err = new Error("Not found")
    err.status = 404
    next(err)
})

//error handler
app.use((err,req,res,next) =>{
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
})