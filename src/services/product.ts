import { apiUrl } from '@/const'
import type { IProduct } from '@/types'
import axios from 'axios'

const getAllProducts = async () => {
  const res = await axios.get<IProduct[]>(`${apiUrl}/products`)
  return res.data
}

const getOneProduct = async (data: { id: string }) => {
  const res = await axios.get<IProduct>(`${apiUrl}/products/${data.id}`)
  return res.data
}

export default { getAllProducts, getOneProduct }
