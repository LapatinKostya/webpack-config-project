import { fireEvent, screen } from '@testing-library/react'

import { Sidebar } from 'widgets/Sidebar'
import { renderWithRouter } from 'shared/lib/tests/renderWithRouter'

describe('Sidebar tests', function () {
  test('render Sidebar test', () => {
    renderWithRouter(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test toggle', () => {
    renderWithRouter(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
