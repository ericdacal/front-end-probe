import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import ListView from '../ListView/ListView'

describe('Fuction to test ListView component', () => {
	const input =  [{ brand: "Acer", id: "ZmGrkLRPXOTpxsU4jjAcv", imgUrl: "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg", model: "Iconia Talk S",price: "170"}, {brand: "Acer" , id: "meQvyTcXACAwWn3wCKSw6", imgUrl: "https://front-test-api.herokuapp.com/images/meQvyTcXACAwWn3wCKSw6.jpg",model: "Liquid Zest",price: "110"}]
	it('should be Acer and Iconia Talk S string in the list of views', () => {
		render(
			<Router>
				<ListView itemList={input}/>
			</Router>
		)
		expect(screen.getAllByText('Acer')[0]).toBeInTheDocument()
		expect(screen.getByText('Iconia Talk S')).toBeInTheDocument()
	})
})