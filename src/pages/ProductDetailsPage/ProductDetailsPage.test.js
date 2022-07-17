import { render, screen } from '@testing-library/react'
import ProductDetailsPage from './ProductDetailsPage'

test('renders learn react link', () => {
  render(<ProductDetailsPage />)
  const linkElement = screen.getByText(/Acer/i)
  expect(linkElement).toBeInTheDocument()
})
