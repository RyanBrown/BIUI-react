// src/components/Feature/Feature.test.tsx
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features Component', () => {
  it('renders all feature cards', () => {
    render(<Features />)
    
    // Check that all 3 feature titles are rendered
    expect(screen.getByText('Instant search')).toBeInTheDocument()
    expect(screen.getByText('Rich embeddings')).toBeInTheDocument()
    expect(screen.getByText('Customizable UI')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    
    expect(screen.getByText(/search your docs with natural language/i)).toBeInTheDocument()
    expect(screen.getByText(/vector-based retrieval at scale/i)).toBeInTheDocument()
    expect(screen.getByText(/style to match your brand/i)).toBeInTheDocument()
  })

  it('has the correct number of feature cards', () => {
    render(<Features />)
    
    const featureCards = screen.getAllByRole('heading', { level: 3 })
    expect(featureCards).toHaveLength(3)
  })

  it('applies correct CSS classes', () => {
    const { container } = render(<Features />)
    
    const featuresSection = container.querySelector('.features')
    expect(featuresSection).toBeInTheDocument()
    
    const grid = container.querySelector('.features__grid')
    expect(grid).toBeInTheDocument()
  })

  it('renders headings with correct hierarchy', () => {
    render(<Features />)
    
    const headings = screen.getAllByRole('heading', { level: 3 })
    headings.forEach(heading => {
      expect(heading).toHaveClass('features__card-title')
    })
  })
})
