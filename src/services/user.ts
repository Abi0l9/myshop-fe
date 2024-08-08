import { apiUrl } from '@/const'
import type { IUser } from '@/types'
import axios from 'axios'

const getMe = async (token: string) => {
  const req = await axios.get<IUser>(`${apiUrl}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return req.data
}

export default { getMe }
