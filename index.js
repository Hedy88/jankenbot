const io = require('socket.io-client');
const socket = io("https://www.trollbox.party/", {
  path: '/api/v0/si/socket.io.js',
  transportOptions: {
    polling: {
      extraHeaders: {
        "Origin": "http://www.trollbox.party",
        "Referer": "http://www.trollbox.party"
      }
    }
  }
})

socket.emit("user joined", "[j.] jankenbot", "#286fad")
console.log("jankenbot is now connected");

/*
Some data you can use:
data.home : Home of the user -- a way of identifying the user based on their IP
data.nick : the nickname of the user
data.msg  : What the person sent
*/

socket.on('message', function(data){
	if (data.msg.startsWith('t.help')) {
		txt = "Hi! Here are the commands:\nj.help\nj.mynick\nj.myhome\nj.about"
		socket.emit('message',txt)
	}
	if (data.msg.startsWith('j.mynick')) {
		txt = 'Your nick is: ' + data.nick
		socket.emit('message', txt)
	}
	if (data.msg.startsWith('j.myhome')) {
		txt = 'Your home is: ' + data.home
		socket.emit('message', txt)
	}
    if (data.msg.startsWith('j.about')) {
		txt = 'jankenbot v1.0.0 | node ver, bot not working.. contact: RGB#2169 on discord.' 
		socket.emit('message', txt)
	}
	
})
