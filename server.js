
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})
const app = require('./app');




app.listen(process.env.PORT, () => {
  console.log(`Server is listening on a port ${process.env.PORT}`);
});
