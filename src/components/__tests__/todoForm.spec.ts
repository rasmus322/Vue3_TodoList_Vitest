import { describe, it, expect, vi } from "vitest"
import { shallowMount } from "@vue/test-utils"
import todoForm from "../todoForm.vue"
import { createPinia } from "pinia"
import { useTodoListStore } from "@/stores/todoList"

const mockOnAdd = vi.fn()

describe('todoForm', () => {
  it ('adds new task properly', () => {
    const wrapper = shallowMount(todoForm, {
      props: {
        addTask: mockOnAdd,
        counter: 0
      }
    })

    wrapper.find('.form').trigger('submit')
    expect(mockOnAdd).toBeCalledTimes(1)
  })

  it ("doesn't add task if name is empty", async () => {
    const pinia = createPinia()
    const store = useTodoListStore(pinia)

    const wrapper = shallowMount(todoForm, {
      global: {
        plugins: [pinia]
      },
      props: {
        addTask: mockOnAdd,
        counter: 0
      }
    })

    const input = wrapper.find('input')
    input.setValue('')

    const form = wrapper.find('form')
    await form.trigger('submit.prevent')

    expect(store.tasks).toHaveLength(0)
  })
})