import { screen, render } from '@testing-library/react';
import Header from './Header'


describe("Fuction to test Header component", () => {
	const input = {
		page : 0,
		itemCount: 1
	}
	it('should render with this brand and model', () => {
		render(
			<Header item={input}/>
		);
		expect(screen.getByText(1).toBeInTheDocument());
	});
})

