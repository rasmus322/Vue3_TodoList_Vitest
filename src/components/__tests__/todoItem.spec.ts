import { describe, it, expect, vi, beforeEach } from "vitest"
import { shallowMount } from "@vue/test-utils"
import todoItem from "../todoItem.vue"

const mockOnDelete = vi.fn()
const mockOnChange = vi.fn()

describe('todoItem', () => {
  let wrapper: ReturnType<typeof shallowMount>
  const mockTask = {
    id: Math.floor(Math.random() * 1000) + 1,
    name: 'test case',
    done: false
  }

  beforeEach(() => {
    wrapper = shallowMount(todoItem, {
      propsData: {
        task: mockTask,
        deleteTask: mockOnDelete,
        changeTaskStatus: mockOnChange
      }
    })
  })

  it ('shows task name properly', () => {
    expect(wrapper.text()).toContain(mockTask.name)
  })

  it ('deletes task properly', () => {
    wrapper.find('.delete_btn').trigger('click')
    expect(mockOnDelete).toBeCalledTimes(1)
  })

  it ('changes task status properly', () => {
    wrapper.find('.done_btn').trigger('click')
    expect(mockOnChange).toBeCalledTimes(1)
  })
})
