import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('classNames', function () {
  test('render Button test', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
