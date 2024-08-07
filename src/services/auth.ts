import { apiUrl } from '@/const'
import type { ISignUpForm, ISignInForm } from '@/types'
import axios from 'axios'

const loginUser = async (data: ISignInForm) => {
  const res = await axios.post<{ success: boolean; token: string }>(`${apiUrl}/auth/login`, data)
  return res.data
}

const registerUser = async (data: ISignUpForm) => {
  const res = await axios.post<{ success: boolean; message: string }>(
    `${apiUrl}/auth/register`,
    data
  )
  return res.data
}

export default { loginUser, registerUser }
