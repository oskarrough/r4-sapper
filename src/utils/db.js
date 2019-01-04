const toObject = (obj, id) => Object.assign(obj, {id})
export const toArray = data => Object.keys(data).map(id => toObject(data[id], id))
export const endpoint = 'https://radio4000.firebaseio.com'
