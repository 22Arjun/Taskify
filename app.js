function todo() {
    const card1 = document.querySelector('.card');
    const card2 = document.createElement('div');
    const heading1 = document.createElement('h1');
    const inputTodo = document.createElement('input');
    const addTodo = document.createElement('button');
    const todoDiv1 = document.createElement('div');
    const todoDiv2 = document.createElement('div');
    const loggedIn = document.createElement('p');


    //set Attributing class and id
    card2.setAttribute('class', 'card-2');
    inputTodo.setAttribute('id', 'input-todo');
    inputTodo.setAttribute('placeholder', 'Add a new todo');
    addTodo.setAttribute('id', 'add-btn');
    addTodo.setAttribute('onclick', 'addTodo()')
    todoDiv1.setAttribute('class', 'todo-div');
    todoDiv2.setAttribute('class', 'todo-div');
    loggedIn.setAttribute('id', 'logged-in');


    //appending child
    card2.appendChild(heading1);
    card2.appendChild(inputTodo);
    card2.appendChild(addTodo);
    card2.appendChild(todoDiv1);
    card2.appendChild(todoDiv2);
    card2.appendChild(loggedIn);


    //setting the innerHTML content
    heading1.innerHTML = 'Your Todo List';
    addTodo.innerHTML = 'Add Todo';
    todoDiv1.innerHTML = 'bath';
    todoDiv2.innerHTML = 'take a walk outside';
    loggedIn.innerHTML = "Logged In successfully. <a href='/'>Log out</a>";


    card1.innerHTML = "";
    card1.innerHTML = card2.innerHTML;


}