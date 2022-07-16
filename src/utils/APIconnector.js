const host = 'https://front-test-api.herokuapp.com/'

export const getItemsFromAPI = async (user) => {
	let url = new URL("/api/product", host)
	const response = await fetch(url)
	return await response.json()
};


export const getItemDetail = async (id) => {
	let url = new URL("/api/product/" + id, host)
	const response = await fetch(url)
	return await response.json()
};

