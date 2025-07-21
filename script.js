function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const list = document.getElementById("task-list");

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark done on click
    li.addEventListener("click", function() {
        li.classList.toggle("done");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        list.removeChild(li);
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
}