import { defineStore } from "pinia"
//import { ref } from "vue"

export const useTodoListStore = defineStore('todoList', () => {
    const tasks: object[] = []

    function addTask(name:string, description:string) {
        let task: any = {
            id: tasks.length + 1,
            name: name,
            description: description,
            done: false
        }

        tasks.push(task)
        console.log('task has been pushed')
    }

    return { tasks, addTask }
})