import { describe, it, expect, vi, beforeEach } from "vitest"
import { shallowMount } from "@vue/test-utils"
import todoItem from "../todoItem.vue"

const mockOnDelete = vi.fn()
const mockOnChange = vi.fn()

describe('todoItem', () => {
  let wrapper: ReturnType<typeof shallowMount>
  const mockItem = {
    id: Math.floor(Math.random() * 1000) + 1,
    name: 'test case',
    description: 'description',
    done: false
  }

  beforeEach(() => {
    wrapper = shallowMount(todoItem, {
      propsData: {
        item: mockItem,
        delete: mockOnDelete,
        change: mockOnChange
      }
    })
  })

  it ('shows task name properly', () => {
    expect(wrapper.text()).toContain(mockItem.name)
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
