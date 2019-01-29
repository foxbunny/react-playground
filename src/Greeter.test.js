const Greeter = require('./Greeter')

describe('Greeter', () => {
  test('default name', () => {
    const g = new Greeter({ view: jest.fn() })
    expect(g.state.name).toBe('World')
  })

  test('update name', done => {
    const g = new Greeter({ view: jest.fn() })
    jest.spyOn(g, 'setState').mockImplementation(function (newState) {
      expect(newState).toEqual({ name: 'React' })
      done()
    })
    g.updateName('React')
  })

  test('reset name', () => {
    const g = new Greeter({ view: jest.fn() })
    const spy = jest.spyOn(g, 'updateName')
    g.reset()
    expect(spy).toHaveBeenCalledWith('World')
  })

  test('render integration', () => {
    const testView = ({ name, updateName, reset }) => {
      expect(name).toBe('World')

      updateName({ target: { value: 'React' } })
      expect(updateSpy).toHaveBeenCalledWith('React')

      reset()
      expect(resetSpy).toHaveBeenCalledWith()

      return 'Fake return value'
    }

    const g = new Greeter({ view: testView })

    const updateSpy = jest.spyOn(g, 'updateName')
    const resetSpy = jest.spyOn(g, 'reset')

    const ret = g.render()
    expect(ret).toBe('Fake return value')
  })
})
