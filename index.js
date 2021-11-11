//creating global parameters and start
// listening to 'port', we are creating an express
// server and then we are binding it with socket.io
var express 	= require('express'),
	app			= express(),
    server  	= require('http').createServer(app),
    io      	= require('socket.io')(server),
    port    	= 8080;

io.on('connection', (socket) => {
  console.log('a user connected');
});
// listening to port...
server.listen(port, () => {
    console.log("Server is running on port " + port);
});

var listUser  = [];
io.on("connection", (socket) => {
    console.log("user connecting...");

    socket.on('call', (message) => {
        console.log('message: ' + message);
        io.sockets.emit('receiver_room', {data: message}); // message format "callerId/receiverId"
    });

//     // socket.on('statusCalling', (message) => {
//     //     console.log('status: ' + message);
//     //     io.sockets.emit('status_calling', {data: message}); // message format "callerId/receiverId"
//     // });
// });
