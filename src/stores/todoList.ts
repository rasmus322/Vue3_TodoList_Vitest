import { defineStore } from "pinia"
import { ref } from "vue"

export const useTodoListStore = defineStore('todoList', () => {
    const tasks = ref<object[]>([])
    let counter = ref<number>(tasks.value.length)

    function addTask(name:string, description:string) {
        let task: any = {
            id: Math.floor(Math.random() * 1000) + 1,
            name: name,
            description: description,
            done: ref(false)
        }

        tasks.value.push(task)
        counter.value++
        console.log('task has been pushed')
    }

    return { tasks, counter, addTask }
})