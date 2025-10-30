const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public")); 

const file = "data.json";

function readTasks() {
    return JSON.parse(fs.readFileSync(file));
}

function writeTasks(tasks) {
    fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}

app.get("/tasks", (req, res) => {
    res.json(readTasks());
});

app.post("/tasks/complete/:id", (req, res) => {
    const tasks = readTasks();
    const id = parseInt(req.params.id);
    const updatedTasks = tasks.map(task =>
        task.id === id ? { ...task, completed: true } : task
    );
    writeTasks(updatedTasks);
    res.json(updatedTasks);
});

app.listen(PORT, () => {
    console.log(`Server attivo su http://localhost:${PORT}`);
});
