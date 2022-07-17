const host = 'https://front-test-api.herokuapp.com/'

export const getItemsFromAPI = async (user) => {
	let url = new URL("/api/product", host)
	const response = await fetch(url)
	return await response.json()
};


export const getItemDetailFromAPI = async (id) => {
	let url = new URL("/api/product/" + id, host)
	const response = await fetch(url)
	return await response.json()
};

export const addProductToCartFromAPI = async (id, colorCode, storageCode) => {
	let url = new URL("/api/cart/", host)
	let response = await fetch(url, {
		method: 'POST',
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},
    	body: JSON.stringify({id: id, colorCode: colorCode, storageCode: storageCode})
  	});
 	const content = await response.json();

  	console.log(content);
};


