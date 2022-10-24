const url = 'https://my-json-server.typicode.com/tsevdos/epignosis-users/users'

const call = async (url, method = 'GET', data = {}) => {
  const body = method === 'PUT' ? { body: JSON.stringify(data) } : {}
  const response = await fetch(url, { method, ...body })
  return response.json()
}

const createUrlSingleUser = (id) => `${url}/${id}`

const getUsers = async () => {
  return await call(url)
}

const getSingleUser = async (userId) => {
  const singleUserUrl = createUrlSingleUser(userId)
  return await call(singleUserUrl)
}

const updateUser = async (userId, data) => {
  const singleUserUrl = createUrlSingleUser(userId)
  return await call(singleUserUrl, 'PUT', data)
}

export { getSingleUser, getUsers, updateUser }
