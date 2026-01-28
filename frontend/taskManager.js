let tasks = [];

const taskManager = {
    // 1. Create Task & 5. Validation
    createTask: (title) => {
        if (!title || title.trim() === "") {
            throw new Error("Validation Failed: Title is required");
        }
        const task = { id: Date.now(), title, completed: false };
        tasks.push(task);
        return task;
    },

    // 2. Get Task
    getTasks: () => tasks,

    // 3. Update Task
    updateTask: (id, newTitle) => {
        const task = tasks.find(t => t.id === id);
        if (task) task.title = newTitle;
        return task;
    },

    // 4. Delete Task
    deleteTask: (id) => {
        const initialLength = tasks.length;
        tasks = tasks.filter(t => t.id !== id);
        return tasks.length < initialLength;
    }
};

// This block ensures the code works in your Terminal (Node.js) 
// AND in your Docker Container (Browser)
if (typeof window !== 'undefined') {
    window.taskManager = taskManager;
} else {
    module.exports = taskManager;
}