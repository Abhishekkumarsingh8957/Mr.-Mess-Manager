const http=require('http');
const app=require('./app');
const server=http.createServer(app);
server.listen(8080,console.log('app is working fine'));