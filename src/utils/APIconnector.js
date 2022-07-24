const host = 'https://front-test-api.herokuapp.com/'

export const getItemsFromAPI = async () => {
  const url = new URL('/api/product', host)
  const response = await fetch(url)
  return await response.json()
}

export const getItemDetailFromAPI = async (id) => {
  const url = new URL('/api/product/' + id, host)
  const response = await fetch(url)
  return await response.json()
}

export const addProductToCartFromAPI = async (id, colorCode, storageCode) => {
  const url = new URL('/api/cart/', host)
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, colorCode, storageCode })
  })
  const content = await response.json()
  return content
}
