import { describe, it, expect, vi } from "vitest"
import { mount, shallowMount } from "@vue/test-utils"
import todoForm from "../todoForm.vue"
import { useTodoListStore } from "@/stores/todoList"

const mockOnAdd = vi.fn()

describe('todoForm', () => {
  it ('adds new task properly', () => {
    const wrapper = mount(todoForm, {
      props: {
        addTask: mockOnAdd,
        counter: 0
      }
    })

    wrapper.find('.form').trigger('submit')
    expect(mockOnAdd).toBeCalledTimes(1)
  })
})