import mongoose from 'mongoose'

const DATABASE = process.env.DATABASE

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

.then(() => console.log("Se conecto a la base de datos"))
.catch(e => console.log(`F ${e}`))