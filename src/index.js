const app = require('./app');
const { connect } = require('./database');


async function main() {
   //Conexion con Database
   await connect();
   //App express
   await app.listen(4000, "127.0.0.1");
   console.log('Server on port 4000');
}

main();