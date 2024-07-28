var TodoWrapperEl = document.querySelector(".TodoWrapper");
var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector(".todo-btn");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (todoInput.value.trim() !== "") {
        var newTodo = document.createElement("div");
        newTodo.className = "Todo";
        newTodo.innerHTML = `<p>${todoInput.value}</p>`;
        var wrap = document.createElement("div");
        var note = document.createElement("i");
        note.className = "fa-solid fa-pen-to-square";
        var deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-trash";
        wrap.appendChild(note);
        wrap.appendChild(deleteIcon);
        newTodo.appendChild(wrap);
        TodoWrapperEl.appendChild(newTodo);

        var newTodoForm = document.createElement("form");
        newTodoForm.className = "TodoForm";
        newTodoForm.innerHTML = `
                    <input
                        type="text"
                        class="todo-input"
                        placeholder="Update task"
                        value="${todoInput.value}"
                    /><button type="submit" class="todo-btn">Add Task</button>
        `;
        TodoWrapperEl.appendChild(newTodoForm);
        todoInput.value = "";
        newTodoForm.style.display = "none";
        note.addEventListener("click", function () {
            newTodoForm.style.display = "block";
            newTodo.style.display = "none";
        });
        newTodoForm.addEventListener("submit", function (event) {
            event.preventDefault();
            newTodoForm.style.display = "none";
            newTodo.style.display = "flex";
            var updatedValue = newTodoForm.querySelector(".todo-input").value;
            newTodo.querySelector("p").innerText = updatedValue;
        });
        deleteIcon.addEventListener("click", function () {
            newTodo.remove();
        });
    } else {
        alert("Please enter a todo item.");
    }
});
