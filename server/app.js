var express = require('express'); //pulls in express module and saves it
var app = express(); //envoke the method with ()
var server = require('http').createServer(app);
var path = require('path');
var bodyParser = require('body-parser');
var users = [];
var gulp = require('gulp');

app.use(bodyParser.urlencoded({extended: true})); //grabs the body and parses

app.set('views', path.join(__dirname, 'views')); //allowing access to views folder
//telling express where to find the views
app.set('view engine', 'hbs');

app.get('/home', function(request, response){
	response.render('home', {}) //get in the habit of having an empty object incase you need to pass something through
})

//json object!!!//

var dataFromOurDatabase = [{ 
	"username": "Bridjet",
	"url": "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1977392_10153563662309007_2621012489094860611_n.jpg?oh=d287668bfb4fc10936b14c6751170e25&oe=592B2B86",
	"about": "Hey there! A little about me, I love coffee, lifting, writing about music, and petting all of the dogs in Chicago. Welcome to my page!"
	}]

app.get('/home', function(request, response){
	response.render('home', {userData: dataFromOurDatabase})
})

//#8 json object to SEND over info via home page//
app.send("/home", function(request, response){
	response.render('home', {dataFromOurDatabase})
})

//is this the gulp file add that I need to get my css to work??
//confused on this, not sure what to do since I keep getting
//cant GET app.js or styles.less/styles.css. Tried lots of things.

//gulp.get('/', function(request, response){
// 	response.render("login", "register", "home")
// })

//this will be the page the user sees
app.get('/home', function(request, response){ //waiting for a request for route
	response.render("home", {})//will take html inside the {{{body}}} just a keyword for the server to look for
})

app.get('/register', function(request, response){ //listening for a get request to sign up
	var users = [{username: "admin", password: "1234"}, {username: "bridjet", password: "2345"}]
	response.render("register");
})

app.post('/register', function(request, response){
	console.log(request.body);
	users.push({username: request.body.username, password: request.body.password}); //even user.push(request.body
	console.log(users);
	response.send("success! Please return to /register or /login or /home"); //to make sure it works, there should be a big object when console.log
})

app.get('/login', function(request, response){ //listen for a get to signup
	response.render("login");
});

//static folder for clientsidejavascript//
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', function(request, response){ //listen for a post to login
	console.log(request.body);
	var loginUsername = request.body.username;
	var loginPassword = request.body.password;

	for (i = 0; i <= users.length; i++)
		if(loginUsername === user[i].username){
			if(loginPassword === users[i].password){
				response.send("success");
			}else{
				response.send("failure");
			}
			}
				// if (username === username && password === password)
})

server.listen(4000, function(){
	console.log("listening to ya dude");
});
