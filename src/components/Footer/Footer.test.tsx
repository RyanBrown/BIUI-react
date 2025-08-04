// src/components/Footer/Footer.test.tsx
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer Component', () => {
  it('renders copyright with specified year', () => {
    render(<Footer year={2025} />)
    
    // Test for 2025 - handle the text being split across multiple DOM nodes
    const copyright = screen.getByText((content, element) => {
      return element?.textContent === '© 2025 Brown Industries, LLC. All rights reserved.'
    })
    expect(copyright).toBeInTheDocument()
  })

  it('renders copyright with current year when no year prop provided', () => {
    render(<Footer />)
    
    const currentYear = new Date().getFullYear()
    const copyright = screen.getByText((content, element) => {
      return element?.textContent === `© ${currentYear} Brown Industries, LLC. All rights reserved.`
    })
    expect(copyright).toBeInTheDocument()
  })

  it('renders privacy policy link', () => {
    render(<Footer />)
    
    const privacyLink = screen.getByRole('link', { 
      name: /privacy policy/i 
    })
    expect(privacyLink).toBeInTheDocument()
    expect(privacyLink).toHaveAttribute('href', '/privacy')
  })

  it('renders terms of service link', () => {
    render(<Footer />)
    
    const termsLink = screen.getByRole('link', { 
      name: /terms of service/i 
    })
    expect(termsLink).toBeInTheDocument()
    expect(termsLink).toHaveAttribute('href', '/terms')
  })

  it('has correct navigation structure', () => {
    render(<Footer />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
  })

  it('applies correct CSS classes', () => {
    const { container } = render(<Footer />)
    
    expect(container.querySelector('.footer')).toBeInTheDocument()
    expect(container.querySelector('.footer__container')).toBeInTheDocument()
    expect(container.querySelector('.footer__copy')).toBeInTheDocument()
    expect(container.querySelector('.footer__links')).toBeInTheDocument()
  })

  it('renders as a footer element', () => {
    render(<Footer />)
    
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })
})
