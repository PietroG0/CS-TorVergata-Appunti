document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("task-list");

    function loadTasks() {
        fetch("/tasks")
            .then(res => res.json())
            .then(tasks => {
                taskList.innerHTML = "";
                tasks.forEach(task => {
                    const card = document.createElement("div");
                    card.className = "task-card";
                    if (task.completed) card.classList.add("completed");

                    const text = document.createElement("p");
                    text.textContent = task.text;

                    const btn = document.createElement("button");
                    btn.className = "complete-btn";
                    btn.textContent = "Completa";
                    btn.disabled = task.completed;

                    btn.addEventListener("click", () => {
                        fetch(`/tasks/complete/${task.id}`, { method: "POST" })
                            .then(res => res.json())
                            .then(() => loadTasks());
                    });

                    card.appendChild(text);
                    card.appendChild(btn);
                    taskList.appendChild(card);
                });
            });
    }

    loadTasks();
});
