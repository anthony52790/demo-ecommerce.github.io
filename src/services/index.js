import { url } from '../environments/environments.js'

const getHttp = async (api = '') => {
  try {
    const headers = {
      method: 'GET',
      cache: "force-cache"
    }
    const res = await fetch(`${url}${api}`, headers)

    if (!res.ok) { console.log('error request api') }

    const json = await res.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

export const getAllCategories = async () => {
  const allCategories = await getHttp(`/products/categories`)
  return allCategories
}

export const getOneCategory = async (name) => {
  const oneCategory = await getHttp(`/products/category/${name}`)
  return oneCategory
}

export const getProduct = async (id) => {
  const product = await getHttp(`/products/${id}`)
  return product
}

export const getProducts = async () => {
  const products = await getHttp(`/products`)
  return products
}