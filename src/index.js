const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const middleware = require('./middleware/midwr1.js');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middleware.timeC)

mongoose.connect("mongodb+srv://amanprajapat82780:Lucky82780@newproject.3qdy8y3.mongodb.net/Aman82780?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb : Apun chal gya btao kya krne ka 😂😆"))
.catch ( err => console.log(err) )


app.use('/', route);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})
