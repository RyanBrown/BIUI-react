// src/components/Hero/Hero.test.tsx
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    
    const heading = screen.getByRole('heading', { 
      name: /build ai-powered apps in minutes/i 
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    
    const subtitle = screen.getByText(/Launch with our SDK, embed advanced search, Q&A, and summarization/i)
    expect(subtitle).toBeInTheDocument()
  })

  it('renders the CTA button with correct link', () => {
    render(<Hero />)
    
    const ctaButton = screen.getByRole('link', { 
      name: /get started for free/i 
    })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '#signup')
  })

  it('has the correct CSS classes', () => {
    render(<Hero />)
    
    const heroSection = screen.getByRole('region', { name: /hero section/i })
    expect(heroSection).toHaveClass('hero')
  })

  it('renders the background SVG', () => {
    render(<Hero />)
    
    const svg = screen.getByRole('img', { name: /background decoration/i })
    expect(svg).toBeInTheDocument()
  })
})
