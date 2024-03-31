import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useTodoListStore = defineStore('todoList', () => {
    const tasks = ref<object[]>([])
    let counter = computed(() => tasks.value.filter(item => (item as {done: boolean}).done !== true).length)

    function addTask(name:string, description:string) {
        let task: object = {
            id: Math.floor(Math.random() * 1000) + 1,
            name: name,
            description: description,
            done: ref(false)
        }

        tasks.value.push(task)
        console.log('task has been pushed')
    }

    function deleteTask(item:object) {
        if (confirm("Are you sure you want to delete this task?")) {
            tasks.value.splice(tasks.value.indexOf(item), 1)
        }
    }

    function changeTaskStatus(item: object) {
        (item as {done:boolean}).done = !(item as {done:boolean}).done
    }

    return { tasks, counter, addTask, deleteTask, changeTaskStatus }
})