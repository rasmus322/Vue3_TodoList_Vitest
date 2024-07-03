import { defineStore } from "pinia"
import { ref, computed } from "vue"

export interface ITask {
    id: number,
    name: string,
    done: boolean
}

export const useTodoListStore = defineStore('todoList', () => {
    const tasks = ref<ITask[]>([])
    let counter = computed(() => tasks.value.filter(task => (task as {done: boolean}).done !== true).length)

    function addTask(name: string) {
        if (name.trim() === '') {
            alert('Write something in your task')
            return
        }
      
        const task: ITask = {
            id: Math.floor(Math.random() * 1000) + 1,
            name,
            done: false
        }
          
        tasks.value.push(task)
        console.log('task has been pushed')
    }

    function deleteTask(task: ITask) {
        if (confirm("Are you sure you want to delete this task?")) {
            tasks.value = tasks.value.filter(t => t.id !== task.id)
        }
    }

    function changeTaskStatus(task: ITask) {
        //(item as {done: boolean}).done = !(item as {done: boolean}).done
        task.done = !task.done
    }

    return { tasks, counter, addTask, deleteTask, changeTaskStatus }
})