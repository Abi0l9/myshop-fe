import axios from 'axios'
import catchErrors from './catchErrors'

const uploadImageToCloud = async (file: string) => {
  const cloud_name = 'dryjz5fvt'
  if (file.includes('https://')) return file
  try {
    const request = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
      file,
      upload_preset: 'di99gv95',
      cloud_name: cloud_name,
      folder: 'ihsan'
    })
    return request?.data?.secure_url
  } catch (e) {
    const msg = catchErrors(e)
    return msg
  }
}

export default uploadImageToCloud
