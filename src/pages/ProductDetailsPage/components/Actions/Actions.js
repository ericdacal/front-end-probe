import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { addProductToCartFromAPI } from "../../../../utils/APIconnector";

function Actions ({item}) {
	const [selected, setSelection] = useState([item.options.colors[0].code, item.options.storages[0].code]);
	function storageSelection(event) {
		let code = item.options.storages.find(element => element.name == event.target.value).code;
		selected[0] = code
		setSelection(selected)
	}
	function colorSelection(event) {
		let code = item.options.colors.find(element => element.name == event.target.value).code;
		selected[0] = code
		setSelection(selected)
	}
	function sendToCart() {
		addProductToCartFromAPI(item.id, selected[1], selected[0])
	}
	return(
		<div>
			<Form.Select onChange={storageSelection} aria-label="Storage">
				{item.options.storages.map((storage) => <option>{storage.name}</option>)}
			</Form.Select>
			<Form.Select onChange={colorSelection} aria-label="Color">
				{item.options.colors.map((color) => <option>{color.name}</option>)}
			</Form.Select>
			<Button onClick={sendToCart} >Add to cart</Button>
		</div>
	)
}
export default Actions