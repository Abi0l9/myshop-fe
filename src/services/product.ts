import { apiUrl } from '@/const'
import type { IProduct, IProductForm, IResponse } from '@/types'
import axios from 'axios'

const getAllProducts = async () => {
  const res = await axios.get<{ success: boolean; products: IProduct[] }>(`${apiUrl}/products`)
  return res.data
}

const getOneProduct = async (data: { id: string }) => {
  const res = await axios.get<{ success: boolean; product: IProduct }>(
    `${apiUrl}/products/${data.id}`
  )
  return res.data
}

const getProductsByName = async (data: { name: string }) => {
  const res = await axios.get<{ success: boolean; products: IProduct[] }>(
    `${apiUrl}/products/search/query?name=${data.name}`
  )
  return res.data
}

const addProduct = async (data: IProductForm, token: string) => {
  const res = await axios.post<IResponse>(`${apiUrl}/products/`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res.data
}

const deleteProduct = async (id: string, token: string) => {
  const res = await axios.delete<IResponse>(`${apiUrl}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res.data
}

const editProduct = async (id: string, data: IProductForm, token: string) => {
  const res = await axios.patch<IResponse>(`${apiUrl}/products/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res.data
}

export default {
  getAllProducts,
  getOneProduct,
  getProductsByName,
  addProduct,
  deleteProduct,
  editProduct
}
