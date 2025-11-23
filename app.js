  /*
  const card1 = document.querySelector('.card');
    const card2 = document.createElement('div');
    const heading1 = document.createElement('h1');
    const inputTodo = document.createElement('input');
    const addBtn = document.createElement('button');
    const todoDiv1 = document.createElement('div');
    const todoDiv2 = document.createElement('div');
    const loggedIn = document.createElement('p');
    
    
    
    function todo() {
        
        
        
        //set Attributing class and id
        card2.setAttribute('class', 'card-2');
        inputTodo.setAttribute('id', 'input-todo');
        inputTodo.setAttribute('placeholder', 'Add a new todo');
        addBtn.setAttribute('id', 'add-btn');
        todoDiv1.setAttribute('class', 'todo-div');
        todoDiv1.setAttribute('id', 'todo-div1');
        todoDiv2.setAttribute('class', 'todo-div');
        todoDiv2.setAttribute('id', 'todo-div2');
        loggedIn.setAttribute('id', 'logged-in');
        
        
        //appending child
        card2.appendChild(heading1);
        card2.appendChild(inputTodo);
        card2.appendChild(addBtn);
        card2.appendChild(todoDiv1);
        card2.appendChild(todoDiv2);
        card2.appendChild(loggedIn);
        
        
        //setting the innerHTML content
        heading1.innerHTML = 'Taskify';
        addBtn.innerHTML = 'Add Todo';
        todoDiv1.innerHTML = 'bath';
        todoDiv2.innerHTML = 'take a walk outside';
        loggedIn.innerHTML = "Logged In successfully. <a href='/'>Log out</a>";
        
        addBtn.addEventListener("click", addTodo);
        
        
        card1.innerHTML = "";
        card1.appendChild(card2);
        
    const todoDiv = document.querySelectorAll('.todo-div');
    let strike = [false, false];

    for(let i = 0; i<3; i++) {
         todoDiv[i].addEventListener("click", function() {
            if(strike[i] === false) {
                todoDiv[i].style.textDecoration = 'line-through';
                strike[i] = true;
            }
            else if(strike[i] === true) {
            todoDiv[i].style.textDecoration = 'none';
            strike[i] = false;
            }
        });
    }



}





function addTodo() {
    if(inputTodo.value) {
        
        todoDiv2.innerHTML = todoDiv1.innerHTML;
        todoDiv1.innerHTML = inputTodo.value;
        inputTodo.value = "";
    }
}

*/

//-------------------------------------------------------------------------------

const express = require('express');
const app = express();

let users = [];
app.use(express.json());
app.use(express.static("public"));


function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}


//GET Requests
app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + "/public/sign-up.html");
})

app.get('/signin', (req, res) => {
    res.sendFile(__dirname + "/public/sign-in.html");
})

app.get('/todo', (req, res) => {
    res.sendFile(__dirname + "/public/todo.html");
})



//POST Requests
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username == username);
    if(users.length === 0 || user.username == username) {

        users.push({
            username: username,
            password: password
        });
        res.send({
            message : 'You are signed up, Please Sign in'
        });
    }
    else {
        res.redirect('/signup');
    }
})

app.post('signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username == username && u.password == password);

    if(user) {
        let token = generateToken();
        user.token = token;
        res.send({
            token: token
        })
    }
    else {
        res.status(403).send({
            message: "Invalid Username or Password! Please Try Again."
        })
    }
})


app.listen(80);