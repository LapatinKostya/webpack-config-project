import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', function () {
  test('with first param', () => {
    expect(classNames('class1')).toBe('class1')
  })

  test('with additional class', () => {
    const expected = 'class1 class2 class3'
    expect(classNames('class1', {}, ['class2', 'class3'])).toBe(expected)
  })

  test('with mods', () => {
    const expected = 'class1 addClass1 addClass2 modClass1 modClass2'
    expect(
      classNames('class1', { modClass1: true, modClass2: true }, [
        'addClass1',
        'addClass2',
      ]),
    ).toBe(expected)
  })

  test('with mods false', () => {
    const expected = 'class1 addClass1 addClass2 modClass2'
    expect(
      classNames('class1', { modClass1: false, modClass2: true }, [
        'addClass1',
        'addClass2',
      ]),
    ).toBe(expected)
  })

  test('with mods undefined', () => {
    const expected = 'class1 addClass1 addClass2'
    expect(
      classNames('class1', { modClass1: undefined, modClass2: false }, [
        'addClass1',
        'addClass2',
      ]),
    ).toBe(expected)
  })
})
