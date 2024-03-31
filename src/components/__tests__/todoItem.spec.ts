import { describe, it, expect, vi } from "vitest"
import { mount, shallowMount } from "@vue/test-utils"
import todoItem from "../todoItem.vue"

const mockOnDelete = vi.fn()
const mockOnChange = vi.fn()

describe('todoItem', () => {
  it ('deletes task properly', () => {
    const wrapper = mount(todoItem, {
      props: {
        item: {
          id: Math.floor(Math.random() * 1000) + 1,
          name: 'test case',
          description: 'description',
          done: false
        },
        delete: mockOnDelete,
        change: mockOnChange
      }
    })
    
    wrapper.find('.delete_btn').trigger('click')
    expect(mockOnDelete).toBeCalledTimes(1)
  })

  it ('changes task status properly', () => {
    const wrapper = mount(todoItem, {
      props: {
        item: {
          id: Math.floor(Math.random() * 1000) + 1,
          name: 'test case',
          description: 'description',
          done: false
        },
        delete: mockOnDelete,
        change: mockOnChange
      }
    })

    wrapper.find('.done_btn').trigger('click')
    expect(mockOnChange).toBeCalledTimes(1)
  })
})
