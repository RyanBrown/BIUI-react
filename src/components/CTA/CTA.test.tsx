// src/components/CTA/CTA.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CTA } from './CTA'

describe('CTA Component', () => {
  it('renders the main heading', () => {
    render(<CTA />)
    
    const heading = screen.getByRole('heading', { 
      name: /ready to take off/i 
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<CTA />)
    
    const subtitle = screen.getByText(/start your journey with biui today/i)
    expect(subtitle).toBeInTheDocument()
  })

  it('renders the signup button', () => {
    render(<CTA />)
    
    const button = screen.getByRole('button', { 
      name: /Start Here/i 
    })
    expect(button).toBeInTheDocument()
  })

  it('has correct section id for anchor linking', () => {
    render(<CTA />)
    
    const section = screen.getByRole('region', { name: /call to action/i })
    expect(section).toHaveAttribute('id', 'signup')
  })

  it('button is clickable', async () => {
    const user = userEvent.setup()
    render(<CTA />)
    
    const button = screen.getByRole('button', { 
      name: /Start Here/i 
    })
    
    // Test that the button can be clicked (doesn't throw)
    await user.click(button)
    expect(button).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    const { container } = render(<CTA />)
    
    expect(container.querySelector('.cta')).toBeInTheDocument()
    expect(container.querySelector('.cta__content')).toBeInTheDocument()
    expect(container.querySelector('.cta__title')).toBeInTheDocument()
    expect(container.querySelector('.cta__subtitle')).toBeInTheDocument()
    expect(container.querySelector('.cta__button')).toBeInTheDocument()
  })
})
