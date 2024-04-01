import { describe, it, expect, vi } from "vitest"
import { shallowMount } from "@vue/test-utils"
import todoForm from "../todoForm.vue"

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
})