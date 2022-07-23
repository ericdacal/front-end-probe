function addOneHour (date) {
  const result = date.setTime(date.getTime() + 60 * 60 * 1000)
  return result
}

export function saveNumberOfProducts (numOfProduct) {
  const toSave = {
    num: numOfProduct,
    expiry: addOneHour(new Date())
  }
  localStorage.setItem('num_products', JSON.stringify(toSave))
}

export function getNumberOfProducts () {
  const numObj = localStorage.getItem('num_products')
  if (!numObj) {
    return null
  }
  const num = JSON.parse(numObj)
  const now = new Date()
  if (now.getTime() > num.expiry) {
    localStorage.removeItem('num_products')
    return null
  }
  return num.num
}

export function saveItemsInLocalStorage (items) {
  const toSave = {
    items,
    expiry: addOneHour(new Date())
  }
  localStorage.setItem('items', JSON.stringify(toSave))
}

export function getItemsInLocalStorage () {
  const items = localStorage.getItem('items')
  if (!items) {
    return null
  }
  const item = JSON.parse(items)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    localStorage.removeItem('items')
    return null
  }
  return item.items
}
