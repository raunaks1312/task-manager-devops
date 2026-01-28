const tm = require('./taskManager');

describe('Task Manager Unit Tests', () => {
    
    test('Should create, get, update, and delete a task with validation', () => {
        // 1. Test Create
        const task = tm.createTask("Learn DevOps");
        expect(task.title).toBe("Learn DevOps");

        // 2. Test Get
        expect(tm.getTasks().length).toBe(1);

        // 3. Test Update
        tm.updateTask(task.id, "Master DevOps");
        expect(tm.getTasks()[0].title).toBe("Master DevOps");

        // 4. Test Delete
        tm.deleteTask(task.id);
        expect(tm.getTasks().length).toBe(0);

        // 5. Test Validation (Empty Title)
        expect(() => tm.createTask("")).toThrow("Validation Failed");
    });
});