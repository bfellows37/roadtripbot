const app = require('../app');

const port = process.env.LISTEN_PORT;

app.listen(port, appListen = ()=>{
  console.log(`LISTEN ${port}`);
});
