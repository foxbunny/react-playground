const greetingEditor = require('./greeting-editor')
const { render, fireEvent, cleanup } = require('react-testing-library')

afterEach(cleanup)

describe('greetingEditor', () => {
  test('basic rendering', () => {
    const el = greetingEditor({
      name: 'John',
      reset: jest.fn(),
      updateName: jest.fn()
    })
    const { asFragment } = render(el)
    expect(asFragment()).toMatchSnapshot()
  })

  test('trigger update', () => {
    const f = jest.fn()
    const el = greetingEditor({
      name: 'John',
      reset: jest.fn(),
      updateName: f
    })
    const { getByLabelText } = render(el)
    fireEvent.change(getByLabelText('Name:'), { target: { value: 'Changed' } })
    expect(f).toHaveBeenCalled()
  })

  test('trigger reset', () => {
    const f = jest.fn()
    const el = greetingEditor({
      name: 'John',
      reset: f,
      updateName: jest.fn()
    })
    const { getByText } = render(el)
    fireEvent.click(getByText('Reset'))
    expect(f).toHaveBeenCalled()
  })
})
