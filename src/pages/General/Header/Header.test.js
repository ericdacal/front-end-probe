import { screen, render } from '@testing-library/react'
import Header from './Header'

describe('Fuction to test Header component', () => {
  const input = {
    page: 0,
    itemCount: 1
  }
  it('Should have an icon image loaded', async () => {
    render(<Header page= {input.page} itemCount={input.itemCount} />)
    const imgItems = await screen.findAllByRole('img')
    expect(imgItems).toHaveLength(1)
  })
})
