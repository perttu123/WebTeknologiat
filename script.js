// Add new todo task to todoList
function addTodo() {
    // TODO: Get the value from todoInput element
    var annettu = document.getElementById("todoInput").value;

    // TODO: Check that input value was provided
    if (annettu == ""){return;}

    // TODO: Get todoList element from html and assign it to variable
    
    // TODO: Create new li element and assign it to variable
    var li = document.createElement("li");
    // TODO: Assing the todoInput value to the textContent
    li.textContent = annettu;
    // TODO: Create completed button to set the task to done, createElement
    var newButton = document.createElement("button");
    // TODO: Add text to the completed button using textContent
    newButton.textContent = "Done";
    
    //Delete Button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";  
    // TODO: Add onclick method to the completed button, that changes the background color of the todo item
    // Below is one way to change the background color using ternary logic
    // todoListItem.style.backgroundColor = todoListItem.style.backgroundColor == "green" ? "" : "green";
    newButton.addEventListener("click", function() {
        li.style.backgroundColor = li.style.backgroundColor == "green" ? "" : "green";
      });
    deleteButton.addEventListener("click", function(){
      li.remove();
    })
    // TODO: Add created done button to new todo list item
    li.appendChild(newButton);
    li.appendChild(deleteButton);
    // TODO: Add new todo list item to todoList
    var output = document.getElementById("todoList");
    output.appendChild(li);
    // TODO: Set todoInput value to empty string
    document.getElementById("todoInput").value = "";
 
      //fkoaskfoaskfoasokfo
}

// Extra assingment -> try to find a way to remove all completed todo items
// hint -> you might need to use additional list variable