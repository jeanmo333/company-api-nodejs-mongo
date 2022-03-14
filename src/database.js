import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/companydb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
})
 .then(db => console.log("db is connect"))
 .catch(error => console.log("error"))