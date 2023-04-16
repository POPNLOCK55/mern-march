const mongoose = require('mongoose');
// only need to edit the db name
mongoose.connect('mongodb://127.0.0.1:27017/jokesAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

