import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
  it('renders welcome message', () => {
    render(<Home />)
    expect(screen.getByText(/Welcome to Mansouri Nutritionist Platform/i)).toBeInTheDocument()
  })
}) 