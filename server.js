const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then( () => {console.log('DB connection successfull')
})

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on a port ${process.env.PORT}`);
});
